import { Call as CallEnjinV100 } from 'src/types/enjinV100'
import { Call as CallEnjinV101 } from 'src/types/enjinV101'
import { Call as CallEnjinV110 } from 'src/types/enjinV110'
import { Call as CallEnjinV120 } from 'src/types/enjinV120'
import { Call as CallEnjinV1021 } from 'src/types/enjinV1021'
import { Call as CallEnjinV1022 } from 'src/types/enjinV1022'
import { Call as CallEnjinV1023 } from 'src/types/enjinV1023'
import { Call as CallEnjinV1026 } from 'src/types/enjinV1026'
import { Call as CallEnjinV1032 } from 'src/types/enjinV1032'
import { Call as CallEnjinV1050 } from 'src/types/enjinV1050'
import { Call as CallMatrixEnjinV603 } from 'src/types/matrixEnjinV603'
import { Call as CallMatrixEnjinV1000 } from 'src/types/matrixEnjinV1000'
import { Call as CallMatrixEnjinV1003 } from 'src/types/matrixEnjinV1003'
import { Call as CallMatrixEnjinV1004 } from 'src/types/matrixEnjinV1004'
import { Call as CallMatrixEnjinV1005 } from 'src/types/matrixEnjinV1005'
import { Call as CallMatrixEnjinV1012 } from 'src/types/matrixEnjinV1012'
import { Call as CallMatrixV500 } from 'src/types/matrixV500'
import { Call as CallMatrixV600 } from 'src/types/matrixV600'
import { Call as CallMatrixV601 } from 'src/types/matrixV601'
import { Call as CallMatrixV602 } from 'src/types/matrixV602'
import { Call as CallMatrixV1000 } from 'src/types/matrixV1000'
import { Call as CallMatrixV1003 } from 'src/types/matrixV1003'
import { Call as CallMatrixV1004 } from 'src/types/matrixV1004'
import { Call as CallMatrixV1005 } from 'src/types/matrixV1005'
import { Call as CallMatrixV1010 } from 'src/types/matrixV1010'
import { Call as CallMatrixV1011 } from 'src/types/matrixV1011'
import { Call as CallMatrixV1012 } from 'src/types/matrixV1012'
import { Call as CallMatrixV1020 } from 'src/types/matrixV1020'
import { Call as CallV100 } from 'src/types/v100'
import { Call as CallV101 } from 'src/types/v101'
import { Call as CallV102 } from 'src/types/v102'
import { Call as CallV103 } from 'src/types/v103'
import { Call as CallV104 } from 'src/types/v104'
import { Call as CallV105 } from 'src/types/v105'
import { Call as CallV106 } from 'src/types/v106'
import { Call as CallV110 } from 'src/types/v110'
import { Call as CallV120 } from 'src/types/v120'
import { Call as CallV1021 } from 'src/types/v1021'
import { Call as CallV1022 } from 'src/types/v1022'
import { Call as CallV1023 } from 'src/types/v1023'
import { Call as CallV1026 } from 'src/types/v1026'
import { Call as CallV1030 } from 'src/types/v1030'
import { Call as CallV1031 } from 'src/types/v1031'
import { Call as CallV1032 } from 'src/types/v1032'
import { Call as CallV1050 } from 'src/types/v1050'

type Call =
    | CallEnjinV100
    | CallEnjinV101
    | CallEnjinV110
    | CallEnjinV120
    | CallEnjinV1021
    | CallEnjinV1022
    | CallEnjinV1023
    | CallEnjinV1026
    | CallEnjinV1032
    | CallEnjinV1050
    | CallMatrixEnjinV603
    | CallMatrixEnjinV1000
    | CallMatrixEnjinV1003
    | CallMatrixEnjinV1004
    | CallMatrixEnjinV1005
    | CallMatrixEnjinV1012
    | CallMatrixV500
    | CallMatrixV600
    | CallMatrixV601
    | CallMatrixV602
    | CallMatrixV1000
    | CallMatrixV1003
    | CallMatrixV1004
    | CallMatrixV1005
    | CallMatrixV1010
    | CallMatrixV1011
    | CallMatrixV1012
    | CallMatrixV1020
    | CallV100
    | CallV101
    | CallV102
    | CallV103
    | CallV104
    | CallV105
    | CallV106
    | CallV110
    | CallV120
    | CallV1021
    | CallV1022
    | CallV1023
    | CallV1026
    | CallV1030
    | CallV1031
    | CallV1032
    | CallV1050

export type Batch = {
    calls: Call[]
    continueOnFailure: boolean
}
