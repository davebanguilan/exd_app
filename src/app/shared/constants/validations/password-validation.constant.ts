import { PasswordRequirement } from '../../enums';
import { PasswordConstraint } from '../../models';

export const PASSWORD_MIN_LENGTH = 8;
export const PASSWORD_VALIDATION_CONSTRAINTS: PasswordConstraint[] = [
    {
        pattern: /[a-z]/g,
        key: PasswordRequirement.LowerCase
    },
    {
        pattern: /[A-Z]/g,
        key: PasswordRequirement.UpperCase
    },
    {
        pattern: /[0-9]/g,
        key: PasswordRequirement.Number
    },
    {
        pattern: /[!#$%&()*+,-./:;<=>?@\\^_`{|}~[\]:\x27\x22]/g,
        key: PasswordRequirement.SpecialCharacter
    }
];
