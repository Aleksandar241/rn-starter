import type {FieldValues} from 'react-hook-form';

import type {AnyObject, ObjectSchema, ObjectShape} from 'yup';

export type SchemeObject = ObjectShape;
export type SchemeResolverProps = ObjectSchema<FieldValues, AnyObject, any, ''>;
