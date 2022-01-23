import { memo } from 'react';
import { LoadingProps } from './loading.type';

export const Circle: React.FC<LoadingProps> = memo((props) => {
  const { color, className, width, height, duration = 2, strokeWidth = 10 } = props;

  return (
    <svg
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      style={{ background: 'none' }}
      width={width}
      height={height}
      display="block"
      preserveAspectRatio="xMidYMid"
      viewBox="0 0 100 100"
    >
      <circle
        cx="50"
        cy="50"
        r="35"
        fill="none"
        stroke={color}
        strokeDasharray="164.93361431346415 56.97787143782138"
        strokeWidth={strokeWidth}
      >
        <animateTransform
          attributeName="transform"
          dur={`${duration}s`}
          keyTimes="0;1"
          repeatCount="indefinite"
          type="rotate"
          values="0 50 50;360 50 50"
        ></animateTransform>
      </circle>
    </svg>
  );
});

export const Spin: React.FC<LoadingProps> = memo((props) => {
  const { color, className, width, height, duration = 2, strokeWidth = 5 } = props;

  return (
    <svg
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      style={{ background: 'none' }}
      width={width}
      height={height}
      display="block"
      preserveAspectRatio="xMidYMid"
      viewBox="0 0 100 100"
    >
      <g transform="translate(80 50)">
        <circle r={strokeWidth} fill={color}>
          <animateTransform
            attributeName="transform"
            begin="-1.4344262295081966s"
            dur={`${duration}s`}
            keyTimes="0;1"
            repeatCount="indefinite"
            type="scale"
            values="1.5 1.5;1 1"
          ></animateTransform>
          <animate
            attributeName="fill-opacity"
            begin="-1.4344262295081966s"
            dur={`${duration}s`}
            keyTimes="0;1"
            repeatCount="indefinite"
            values="1;0"
          ></animate>
        </circle>
      </g>
      <g transform="translate(71.213 71.213) rotate(45)">
        <circle r={strokeWidth} fill={color} fillOpacity="0.875">
          <animateTransform
            attributeName="transform"
            begin="-1.2295081967213115s"
            dur={`${duration}s`}
            keyTimes="0;1"
            repeatCount="indefinite"
            type="scale"
            values="1.5 1.5;1 1"
          ></animateTransform>
          <animate
            attributeName="fill-opacity"
            begin="-1.2295081967213115s"
            dur={`${duration}s`}
            keyTimes="0;1"
            repeatCount="indefinite"
            values="1;0"
          ></animate>
        </circle>
      </g>
      <g transform="translate(50 80) rotate(90)">
        <circle r={strokeWidth} fill={color} fillOpacity="0.75">
          <animateTransform
            attributeName="transform"
            begin="-1.0245901639344261s"
            dur={`${duration}s`}
            keyTimes="0;1"
            repeatCount="indefinite"
            type="scale"
            values="1.5 1.5;1 1"
          ></animateTransform>
          <animate
            attributeName="fill-opacity"
            begin="-1.0245901639344261s"
            dur={`${duration}s`}
            keyTimes="0;1"
            repeatCount="indefinite"
            values="1;0"
          ></animate>
        </circle>
      </g>
      <g transform="translate(28.787 71.213) rotate(135)">
        <circle r={strokeWidth} fill={color} fillOpacity="0.625">
          <animateTransform
            attributeName="transform"
            begin="-0.819672131147541s"
            dur={`${duration}s`}
            keyTimes="0;1"
            repeatCount="indefinite"
            type="scale"
            values="1.5 1.5;1 1"
          ></animateTransform>
          <animate
            attributeName="fill-opacity"
            begin="-0.819672131147541s"
            dur={`${duration}s`}
            keyTimes="0;1"
            repeatCount="indefinite"
            values="1;0"
          ></animate>
        </circle>
      </g>
      <g transform="translate(20 50) rotate(180)">
        <circle r={strokeWidth} fill={color} fillOpacity="0.5">
          <animateTransform
            attributeName="transform"
            begin="-0.6147540983606558s"
            dur={`${duration}s`}
            keyTimes="0;1"
            repeatCount="indefinite"
            type="scale"
            values="1.5 1.5;1 1"
          ></animateTransform>
          <animate
            attributeName="fill-opacity"
            begin="-0.6147540983606558s"
            dur={`${duration}s`}
            keyTimes="0;1"
            repeatCount="indefinite"
            values="1;0"
          ></animate>
        </circle>
      </g>
      <g transform="translate(28.787 28.787) rotate(225)">
        <circle r={strokeWidth} fill={color} fillOpacity="0.375">
          <animateTransform
            attributeName="transform"
            begin="-0.4098360655737705s"
            dur={`${duration}s`}
            keyTimes="0;1"
            repeatCount="indefinite"
            type="scale"
            values="1.5 1.5;1 1"
          ></animateTransform>
          <animate
            attributeName="fill-opacity"
            begin="-0.4098360655737705s"
            dur={`${duration}s`}
            keyTimes="0;1"
            repeatCount="indefinite"
            values="1;0"
          ></animate>
        </circle>
      </g>
      <g transform="translate(50 20) rotate(270)">
        <circle r={strokeWidth} fill={color} fillOpacity="0.25">
          <animateTransform
            attributeName="transform"
            begin="-0.20491803278688525s"
            dur={`${duration}s`}
            keyTimes="0;1"
            repeatCount="indefinite"
            type="scale"
            values="1.5 1.5;1 1"
          ></animateTransform>
          <animate
            attributeName="fill-opacity"
            begin="-0.20491803278688525s"
            dur={`${duration}s`}
            keyTimes="0;1"
            repeatCount="indefinite"
            values="1;0"
          ></animate>
        </circle>
      </g>
      <g transform="translate(71.213 28.787) rotate(315)">
        <circle r={strokeWidth} fill={color} fillOpacity="0.125">
          <animateTransform
            attributeName="transform"
            begin="0s"
            dur={`${duration}s`}
            keyTimes="0;1"
            repeatCount="indefinite"
            type="scale"
            values="1.5 1.5;1 1"
          ></animateTransform>
          <animate
            attributeName="fill-opacity"
            begin="0s"
            dur={`${duration}s`}
            keyTimes="0;1"
            repeatCount="indefinite"
            values="1;0"
          ></animate>
        </circle>
      </g>
    </svg>
  );
});

export const Ellipsis: React.FC<LoadingProps> = memo((props) => {
  const { color, className, width, height, duration = 3, strokeWidth = 20 } = props;

  return (
    <svg
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      style={{ background: 'none' }}
      width={width}
      height={height}
      display="block"
      preserveAspectRatio="xMidYMid"
      viewBox="0 0 100 100"
    >
      <circle cx="84" cy="50" r={strokeWidth} fill={color}>
        <animate
          attributeName="r"
          begin="0s"
          calcMode="spline"
          dur="0.7575757575757576s"
          keySplines="0 0.5 0.5 1"
          keyTimes="0;1"
          repeatCount="indefinite"
          values="10;0"
        ></animate>
        <animate
          attributeName="fill"
          begin="0s"
          calcMode="discrete"
          dur={`${duration}s`}
          keyTimes="0;0.25;0.5;0.75;1"
          repeatCount="indefinite"
          values={`${color};${color};${color};${color};${color};`}
        ></animate>
      </circle>
      <circle cx="16" cy="50" r={strokeWidth} fill={color}>
        <animate
          attributeName="r"
          begin="0s"
          calcMode="spline"
          dur={`${duration}s`}
          keySplines="0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1"
          keyTimes="0;0.25;0.5;0.75;1"
          repeatCount="indefinite"
          values="0;0;10;10;10"
        ></animate>
        <animate
          attributeName="cx"
          begin="0s"
          calcMode="spline"
          dur={`${duration}s`}
          keySplines="0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1"
          keyTimes="0;0.25;0.5;0.75;1"
          repeatCount="indefinite"
          values="16;16;16;50;84"
        ></animate>
      </circle>
      <circle cx="50" cy="50" r={strokeWidth} fill={color}>
        <animate
          attributeName="r"
          begin="-0.7575757575757576s"
          calcMode="spline"
          dur={`${duration}s`}
          keySplines="0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1"
          keyTimes="0;0.25;0.5;0.75;1"
          repeatCount="indefinite"
          values="0;0;10;10;10"
        ></animate>
        <animate
          attributeName="cx"
          begin="-0.7575757575757576s"
          calcMode="spline"
          dur={`${duration}s`}
          keySplines="0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1"
          keyTimes="0;0.25;0.5;0.75;1"
          repeatCount="indefinite"
          values="16;16;16;50;84"
        ></animate>
      </circle>
      <circle cx="84" cy="50" r={strokeWidth} fill={color}>
        <animate
          attributeName="r"
          begin="-1.5151515151515151s"
          calcMode="spline"
          dur={`${duration}s`}
          keySplines="0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1"
          keyTimes="0;0.25;0.5;0.75;1"
          repeatCount="indefinite"
          values="0;0;10;10;10"
        ></animate>
        <animate
          attributeName="cx"
          begin="-1.5151515151515151s"
          calcMode="spline"
          dur={`${duration}s`}
          keySplines="0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1"
          keyTimes="0;0.25;0.5;0.75;1"
          repeatCount="indefinite"
          values="16;16;16;50;84"
        ></animate>
      </circle>
      <circle cx="16" cy="50" r={strokeWidth} fill={color}>
        <animate
          attributeName="r"
          begin="-2.2727272727272725s"
          calcMode="spline"
          dur={`${duration}s`}
          keySplines="0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1"
          keyTimes="0;0.25;0.5;0.75;1"
          repeatCount="indefinite"
          values="0;0;10;10;10"
        ></animate>
        <animate
          attributeName="cx"
          begin="-2.2727272727272725s"
          calcMode="spline"
          dur={`${duration}s`}
          keySplines="0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1"
          keyTimes="0;0.25;0.5;0.75;1"
          repeatCount="indefinite"
          values="16;16;16;50;84"
        ></animate>
      </circle>
    </svg>
  );
});

export const Ripple: React.FC<LoadingProps> = memo((props) => {
  const { color, className, width, height, duration = 2.5, strokeWidth = 8 } = props;

  return (
    <svg
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      style={{ background: 'none' }}
      width={width}
      height={height}
      display="block"
      preserveAspectRatio="xMidYMid"
      viewBox="0 0 100 100"
    >
      <circle cx="50" cy="50" r="0" fill="none" stroke={color} strokeWidth={strokeWidth}>
        <animate
          attributeName="r"
          begin="0s"
          calcMode="spline"
          dur={`${duration}s`}
          keySplines="0 0.2 0.8 1"
          keyTimes="0;1"
          repeatCount="indefinite"
          values="0;40"
        ></animate>
        <animate
          attributeName="opacity"
          begin="0s"
          calcMode="spline"
          dur={`${duration}s`}
          keySplines="0.2 0 0.8 1"
          keyTimes="0;1"
          repeatCount="indefinite"
          values="1;0"
        ></animate>
      </circle>
      <circle cx="50" cy="50" r="0" fill="none" stroke={color} strokeWidth={strokeWidth}>
        <animate
          attributeName="r"
          begin="-1.0638297872340425s"
          calcMode="spline"
          dur={`${duration}s`}
          keySplines="0 0.2 0.8 1"
          keyTimes="0;1"
          repeatCount="indefinite"
          values="0;40"
        ></animate>
        <animate
          attributeName="opacity"
          begin="-1.0638297872340425s"
          calcMode="spline"
          dur={`${duration}s`}
          keySplines="0.2 0 0.8 1"
          keyTimes="0;1"
          repeatCount="indefinite"
          values="1;0"
        ></animate>
      </circle>
    </svg>
  );
});
