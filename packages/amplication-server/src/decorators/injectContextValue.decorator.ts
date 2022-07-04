import { SetMetadata } from '@nestjs/common';
import { InjectableResourceParameter } from 'src/enums/InjectableResourceParameter';
import {
  INJECT_CONTEXT_VALUE,
  InjectContextValueParameters
} from 'src/interceptors/inject-context.interceptor';
import {CustomDecorator} from "@nestjs/common/decorators/core/set-metadata.decorator";

/**
 * Inject given parameter type as given parameter
 * @param parameterType the type of parameter value to inject
 * @param parameterPath a path to the parameter to be injected to
 */
// eslint-disable-next-line @typescript-eslint/naming-convention
export const InjectContextValue = (
  parameterType: InjectableResourceParameter,
  parameterPath: string
):CustomDecorator =>
  SetMetadata<string, InjectContextValueParameters>(INJECT_CONTEXT_VALUE, {
    parameterType,
    parameterPath
  });
