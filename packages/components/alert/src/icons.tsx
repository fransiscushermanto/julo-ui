import { julo, HTMLJuloProps } from '@julo-ui/system';

export function InfoIcon(props: HTMLJuloProps<'svg'>) {
  return (
    <julo.svg
      width={16}
      height={16}
      viewBox='0 0 16 16'
      xmlns='http://www.w3.org/2000/svg'
      data-icon='info'
      {...props}
    >
      <julo.path d='M12.5251 12.5255C13.7253 11.3253 14.3996 9.69742 14.3996 8.00004C14.3996 6.30265 13.7253 4.67479 12.5251 3.47455C11.3249 2.27432 9.697 1.60004 7.99961 1.60004C6.30222 1.60004 4.67436 2.27432 3.47413 3.47455C2.27389 4.67479 1.59961 6.30265 1.59961 8.00004C1.59961 9.69742 2.27389 11.3253 3.47413 12.5255C4.67436 13.7258 6.30222 14.4 7.99961 14.4C9.697 14.4 11.3249 13.7258 12.5251 12.5255ZM8.5653 5.36572C8.41527 5.51575 8.21178 5.60004 7.99961 5.60004C7.78744 5.60004 7.58395 5.51575 7.43392 5.36572C7.2839 5.21569 7.19961 5.01221 7.19961 4.80004C7.19961 4.58786 7.2839 4.38438 7.43392 4.23435C7.58395 4.08432 7.78744 4.00004 7.99961 4.00004C8.21178 4.00004 8.41527 4.08432 8.5653 4.23435C8.71532 4.38438 8.79961 4.58786 8.79961 4.80004C8.79961 5.01221 8.71532 5.21569 8.5653 5.36572ZM6.63392 7.43435C6.78395 7.28432 6.98744 7.20004 7.19961 7.20004H7.99961C8.21178 7.20004 8.41527 7.28432 8.5653 7.43435C8.71532 7.58438 8.79961 7.78786 8.79961 8.00004V10.4C9.01178 10.4 9.21527 10.4843 9.36529 10.6344C9.51532 10.7844 9.59961 10.9879 9.59961 11.2C9.59961 11.4122 9.51532 11.6157 9.36529 11.7657C9.21527 11.9158 9.01178 12 8.79961 12H7.99961C7.78744 12 7.58395 11.9158 7.43392 11.7657C7.2839 11.6157 7.19961 11.4122 7.19961 11.2V8.80004C6.98744 8.80004 6.78395 8.71575 6.63392 8.56572C6.4839 8.41569 6.39961 8.21221 6.39961 8.00004C6.39961 7.78786 6.4839 7.58438 6.63392 7.43435Z' />
    </julo.svg>
  );
}

export function NegativeIcon(props: HTMLJuloProps<'svg'>) {
  return (
    <julo.svg
      width={16}
      height={16}
      viewBox='0 0 16 16'
      xmlns='http://www.w3.org/2000/svg'
      data-icon='negative'
      {...props}
    >
      <julo.path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M12.5251 12.5255C11.3249 13.7258 9.697 14.4 7.99961 14.4C6.30222 14.4 4.67436 13.7258 3.47413 12.5255C2.27389 11.3253 1.59961 9.69742 1.59961 8.00004C1.59961 6.30265 2.27389 4.67479 3.47413 3.47455C4.67436 2.27432 6.30222 1.60004 7.99961 1.60004C9.697 1.60004 11.3249 2.27432 12.5251 3.47455C13.7253 4.67479 14.3996 6.30265 14.3996 8.00004C14.3996 9.69742 13.7253 11.3253 12.5251 12.5255ZM6.40249 5.6099C6.19273 5.61172 5.99208 5.69586 5.84375 5.84418C5.69543 5.99251 5.61129 6.19316 5.60947 6.40292C5.60765 6.61267 5.68828 6.81475 5.83401 6.96564L6.86841 8.00004L5.83401 9.03444C5.7576 9.10823 5.69666 9.19651 5.65473 9.29411C5.6128 9.39172 5.59073 9.49669 5.58981 9.60292C5.58889 9.70914 5.60913 9.81448 5.64935 9.9128C5.68958 10.0111 5.74898 10.1004 5.82409 10.1756C5.89921 10.2507 5.98853 10.3101 6.08685 10.3503C6.18516 10.3905 6.29051 10.4108 6.39673 10.4098C6.50295 10.4089 6.60793 10.3868 6.70553 10.3449C6.80314 10.303 6.89141 10.242 6.96521 10.1656L7.99961 9.13124L9.03401 10.1656C9.18489 10.3114 9.38697 10.392 9.59673 10.3902C9.80649 10.3884 10.0071 10.3042 10.1555 10.1559C10.3038 10.0076 10.3879 9.80691 10.3897 9.59716C10.3916 9.3874 10.3109 9.18532 10.1652 9.03444L9.13081 8.00004L10.1652 6.96564C10.3109 6.81475 10.3916 6.61267 10.3897 6.40292C10.3879 6.19316 10.3038 5.99251 10.1555 5.84418C10.0071 5.69586 9.80649 5.61172 9.59673 5.6099C9.38697 5.60807 9.18489 5.68871 9.03401 5.83444L7.99961 6.86884L6.96521 5.83444C6.81433 5.68871 6.61225 5.60807 6.40249 5.6099Z'
      />
    </julo.svg>
  );
}

export function PositiveIcon(props: HTMLJuloProps<'svg'>) {
  return (
    <julo.svg
      width={16}
      height={16}
      viewBox='0 0 16 16'
      xmlns='http://www.w3.org/2000/svg'
      data-icon='positive'
      {...props}
    >
      <julo.path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M12.5251 12.5255C11.3249 13.7258 9.69699 14.4 7.99961 14.4C6.30222 14.4 4.67436 13.7258 3.47413 12.5255C2.27389 11.3253 1.59961 9.69742 1.59961 8.00004C1.59961 6.30265 2.27389 4.67479 3.47413 3.47455C4.67436 2.27432 6.30222 1.60004 7.99961 1.60004C9.69699 1.60004 11.3249 2.27432 12.5251 3.47455C13.7253 4.67479 14.3996 6.30265 14.3996 8.00004C14.3996 9.69742 13.7253 11.3253 12.5251 12.5255ZM11.1897 6.40292C11.1879 6.19316 11.1038 5.99251 10.9555 5.84418C10.8071 5.69586 10.6065 5.61172 10.3967 5.6099C10.187 5.60807 9.98489 5.68871 9.83401 5.83444L7.19961 8.46884L6.16521 7.43444C6.01433 7.28871 5.81225 7.20808 5.60249 7.2099C5.39273 7.21172 5.19208 7.29586 5.04375 7.44418C4.89543 7.59251 4.81129 7.79316 4.80947 8.00292C4.80765 8.21267 4.88828 8.41475 5.03401 8.56564L6.63401 10.1656C6.78403 10.3156 6.98748 10.3999 7.19961 10.3999C7.41174 10.3999 7.61519 10.3156 7.76521 10.1656L10.9652 6.96564C11.1109 6.81475 11.1916 6.61267 11.1897 6.40292Z'
      />
    </julo.svg>
  );
}

export function WarningIcon(props: HTMLJuloProps<'svg'>) {
  return (
    <julo.svg
      width={16}
      height={16}
      viewBox='0 0 16 16'
      xmlns='http://www.w3.org/2000/svg'
      data-icon='warning'
      {...props}
    >
      <julo.path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M8.00065 2C7.68588 2 7.37641 2.08296 7.10212 2.24088C6.82783 2.3988 6.59796 2.62634 6.43471 2.90156L1.585 11.1808L1.57942 11.1905C1.4195 11.4737 1.33489 11.7948 1.33399 12.1219C1.3331 12.4489 1.41595 12.7705 1.57432 13.0546C1.73268 13.3387 1.96104 13.5755 2.23666 13.7413C2.51229 13.9072 2.82557 13.9964 3.14535 14L12.8484 14L12.8559 13.9999C13.1757 13.9963 13.489 13.9072 13.7646 13.7413C14.0403 13.5755 14.2686 13.3387 14.427 13.0546C14.5854 12.7705 14.6682 12.4489 14.6673 12.1219C14.6664 11.7948 14.5818 11.4737 14.4219 11.1905L14.4163 11.1808L9.56856 2.9049L9.56658 2.90157C9.40333 2.62635 9.17347 2.3988 8.89918 2.24088C8.62489 2.08296 8.31543 2 8.00065 2ZM8.66764 6.27409V8.61523C8.66764 8.98342 8.36917 9.2819 8.00098 9.2819C7.63279 9.2819 7.33431 8.98342 7.33431 8.61523V6.27409C7.33431 5.9059 7.63279 5.60742 8.00098 5.60742C8.36917 5.60742 8.66764 5.9059 8.66764 6.27409ZM8.00098 10.2898H8.00686C8.37505 10.2898 8.67353 10.5883 8.67353 10.9565C8.67353 11.3247 8.37505 11.6231 8.00686 11.6231H8.00098C7.63279 11.6231 7.33431 11.3247 7.33431 10.9565C7.33431 10.5883 7.63279 10.2898 8.00098 10.2898Z'
      />
    </julo.svg>
  );
}

export function NeutralsIcon(props: HTMLJuloProps<'svg'>) {
  return (
    <julo.svg
      width={16}
      height={16}
      viewBox='0 0 16 16'
      xmlns='http://www.w3.org/2000/svg'
      data-icon='neutrals'
      {...props}
    >
      <julo.path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M12.5251 12.5255C13.7253 11.3253 14.3996 9.69742 14.3996 8.00004C14.3996 6.30265 13.7253 4.67479 12.5251 3.47455C11.3249 2.27432 9.69699 1.60004 7.99961 1.60004C6.30222 1.60004 4.67436 2.27432 3.47413 3.47455C2.27389 4.67479 1.59961 6.30265 1.59961 8.00004C1.59961 9.69742 2.27389 11.3253 3.47413 12.5255C4.67436 13.7258 6.30222 14.4 7.99961 14.4C9.69699 14.4 11.3249 13.7258 12.5251 12.5255ZM8.56529 11.7657C8.41527 11.9158 8.21178 12 7.99961 12C7.78744 12 7.58395 11.9158 7.43392 11.7657C7.2839 11.6157 7.19961 11.4122 7.19961 11.2C7.19961 10.9879 7.2839 10.7844 7.43392 10.6344C7.58395 10.4843 7.78744 10.4 7.99961 10.4C8.21178 10.4 8.41527 10.4843 8.56529 10.6344C8.71532 10.7844 8.79961 10.9879 8.79961 11.2C8.79961 11.4122 8.71532 11.6157 8.56529 11.7657ZM7.43392 4.23435C7.58395 4.08432 7.78744 4.00004 7.99961 4.00004C8.21178 4.00004 8.41527 4.08432 8.56529 4.23435C8.71532 4.38438 8.79961 4.58786 8.79961 4.80004V8.00004C8.79961 8.21221 8.71532 8.41569 8.56529 8.56572C8.41527 8.71575 8.21178 8.80004 7.99961 8.80004C7.78744 8.80004 7.58395 8.71575 7.43392 8.56572C7.2839 8.41569 7.19961 8.21221 7.19961 8.00004V4.80004C7.19961 4.58786 7.2839 4.38438 7.43392 4.23435Z'
      />
    </julo.svg>
  );
}