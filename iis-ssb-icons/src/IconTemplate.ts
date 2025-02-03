import { Template } from "@svgr/babel-plugin-transform-svg-component";

export const IconTemplate: Template = (variables, { tpl, options }) => {
  console.log(variables.componentName);
  return tpl`
    import * as React from 'react';
    import { forwardRef } from 'react';

    type IconVariant = 'outline' | 'default';

    interface IconProps extends Omit<React.SVGProps<SVGSVGElement>, 'width' | 'height'> {
      size?: number | string;
      variant?: IconVariant;
    };

    const ${
      variables.componentName
    } = (props: IconProps, ref: React.Ref<SVGSVGElement>) => {
      const { size = 24, variant = 'default',className, ...rest } = props;

      const getVariantStyles = (variant: IconVariant) => {
        switch (variant) {
          case 'outline':
            return { fill: 'currentColor' };
          default:
            return { fill: 'currentColor' };
        }
      };


      const variantStyles = getVariantStyles(variant);
      const svgProps = {
        width: size,

        height: size,
        className: className?.concat(' iis-ssb-icon ').concat("${variables.componentName.toString()}").toLowerCase() ||' ',
        ref,
        ...variantStyles,
        ...rest,
      };

      const svgElement = ${variables.jsx};
      const enhancedSvgElement = React.cloneElement(svgElement, {size:undefined,variant:undefined, ...svgProps});

      return enhancedSvgElement;
    };

    const ForwardRef = forwardRef(${variables.componentName});

    ${variables.componentName}.displayName = '${variables.componentName}';

    export default ForwardRef;
  `;
};
