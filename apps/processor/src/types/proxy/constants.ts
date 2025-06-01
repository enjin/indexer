import {sts, Block, Bytes, Option, Result, ConstantType, RuntimeCtx} from '../support'

export const proxyDepositBase =  {
    /**
     *  The base amount of currency needed to reserve for creating a proxy.
     * 
     *  This is held for an additional storage item whose value size is
     *  `sizeof(Balance)` bytes and whose key size is `sizeof(AccountId)` bytes.
     */
    matrixEnjinV1012: new ConstantType(
        'Proxy.ProxyDepositBase',
        sts.bigint()
    ),
}

export const proxyDepositFactor =  {
    /**
     *  The amount of currency needed per proxy added.
     * 
     *  This is held for adding 32 bytes plus an instance of `ProxyType` more into a
     *  pre-existing storage value. Thus, when configuring `ProxyDepositFactor` one should take
     *  into account `32 + proxy_type.encode().len()` bytes of data.
     */
    matrixEnjinV1012: new ConstantType(
        'Proxy.ProxyDepositFactor',
        sts.bigint()
    ),
}

export const maxProxies =  {
    /**
     *  The maximum amount of proxies allowed for a single account.
     */
    matrixEnjinV1012: new ConstantType(
        'Proxy.MaxProxies',
        sts.number()
    ),
}

export const maxPending =  {
    /**
     *  The maximum amount of time-delayed announcements that are allowed to be pending.
     */
    matrixEnjinV1012: new ConstantType(
        'Proxy.MaxPending',
        sts.number()
    ),
}

export const announcementDepositBase =  {
    /**
     *  The base amount of currency needed to reserve for creating an announcement.
     * 
     *  This is held when a new storage item holding a `Balance` is created (typically 16
     *  bytes).
     */
    matrixEnjinV1012: new ConstantType(
        'Proxy.AnnouncementDepositBase',
        sts.bigint()
    ),
}

export const announcementDepositFactor =  {
    /**
     *  The amount of currency needed per announcement made.
     * 
     *  This is held for adding an `AccountId`, `Hash` and `BlockNumber` (typically 68 bytes)
     *  into a pre-existing storage value.
     */
    matrixEnjinV1012: new ConstantType(
        'Proxy.AnnouncementDepositFactor',
        sts.bigint()
    ),
}
