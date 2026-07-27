import { Attribute, Collection, Metadata, Token, TokenGroup } from '~/model'
import { metadataParser } from '~/util/metadata'

type ExternalMetadata = Exclude<Parameters<typeof metadataParser>[2], null>
type MetadataResource = Collection | Token | TokenGroup
type InheritableMetadataField =
    | 'name'
    | 'description'
    | 'externalUrl'
    | 'keywords'
    | 'fallbackImage'
    | 'bannerImage'
    | 'media'
    | 'meta'
    | 'attributes'

const INHERITABLE_METADATA_FIELDS: InheritableMetadataField[] = [
    'name',
    'description',
    'externalUrl',
    'keywords',
    'fallbackImage',
    'bannerImage',
    'media',
    'meta',
    'attributes',
]

export class MetadataService {
    applyMetadata(
        resource: Collection | TokenGroup,
        externalMetadata: ExternalMetadata | Record<string, unknown> | null | undefined,
        attributes: Attribute[] = resource.attributes
    ): Metadata {
        const metadata = this.parseMetadata(externalMetadata)
        this.applyAttributes(metadata, attributes)
        return this.updateResourceMetadata(resource, metadata)
    }

    applyTokenMetadata(
        token: Token,
        externalMetadata: ExternalMetadata | Record<string, unknown> | null | undefined
    ): Metadata {
        const metadata = this.parseMetadata(externalMetadata)
        const tokenGroup = this.getPrimaryTokenGroup(token.tokenGroupTokens)

        this.inheritMetadata(metadata, tokenGroup?.metadata)
        this.inheritMetadata(metadata, this.getCollectionMetadata(token.collection))
        this.applyAttributes(metadata, token.attributes)

        return this.updateResourceMetadata(token, metadata)
    }

    private getPrimaryTokenGroup(tokenGroupTokens?: Token['tokenGroupTokens']): TokenGroup | undefined {
        const relations = tokenGroupTokens ?? []
        const primaryRelation = relations.reduce<(typeof relations)[number] | undefined>((primary, relation) => {
            if (!primary) {
                return relation
            }

            const primaryPosition = primary.position ?? Number.MAX_SAFE_INTEGER
            const relationPosition = relation.position ?? Number.MAX_SAFE_INTEGER

            return relationPosition < primaryPosition ? relation : primary
        }, undefined)

        return primaryRelation?.tokenGroup
    }

    private getCollectionMetadata(collection?: Collection): Metadata | null | undefined {
        return collection?.metadata
    }

    private parseMetadata(externalMetadata: ExternalMetadata | Record<string, unknown> | null | undefined): Metadata {
        if (!externalMetadata) {
            return new Metadata()
        }

        return metadataParser(
            new Metadata(),
            { key: 'uri', value: '' } as Attribute,
            externalMetadata as ExternalMetadata
        )
    }

    private applyAttributes(metadata: Metadata, attributes: Attribute[]): void {
        for (const attribute of attributes.filter((item) => item.key !== 'uri')) {
            metadataParser(metadata, attribute, null)
        }
    }

    private inheritMetadata(metadata: Metadata, inheritedMetadata: Metadata | null | undefined): void {
        if (!inheritedMetadata) {
            return
        }

        for (const field of INHERITABLE_METADATA_FIELDS) {
            if (
                this.isMissingMetadataValue(metadata[field]) &&
                !this.isMissingMetadataValue(inheritedMetadata[field])
            ) {
                metadata[field] = inheritedMetadata[field] as never
            }
        }
    }

    private isMissingMetadataValue(value: unknown): boolean {
        if (value === null || value === undefined || value === '') {
            return true
        }

        if (Array.isArray(value)) {
            return value.length === 0
        }

        return (
            typeof value === 'object' &&
            Object.getPrototypeOf(value) === Object.prototype &&
            Object.keys(value).length === 0
        )
    }

    private updateResourceMetadata(resource: MetadataResource, metadata: Metadata): Metadata {
        if (!(resource instanceof Collection)) {
            metadata.socials = undefined
        }

        metadata.lastUpdated = new Date()
        resource.metadata = metadata

        if (resource instanceof Token || resource instanceof Collection) {
            resource.name = metadata.name
        }

        return metadata
    }
}
