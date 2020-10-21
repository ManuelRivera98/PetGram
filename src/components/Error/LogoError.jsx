/* eslint-disable react/jsx-props-no-spreading */
import * as React from 'react';

function SvgComponent(props) {
  return (
    <svg
      width={232.3}
      height={126.92}
      viewBox="133.85 11.54 232.3 126.92"
      style={{
        background: '#fff 0 0',
      }}
      preserveAspectRatio="xMidYMid"
      {...props}
    >
      <defs>
        <filter
          id="prefix__editing-vintage"
          x="-100%"
          y="-100%"
          width="300%"
          height="300%"
        >
          <feConvolveMatrix
            in="SourceGraphic"
            result="extrude"
            order="9,9"
            divisor={1}
            kernelMatrix="1,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,1"
          />
          <feFlood floodColor="#900" result="flood-extrude" />
          <feComposite
            operator="in"
            in="flood-extrude"
            in2="extrude"
            result="extrude-color"
          />
          <feOffset dx={5} dy={5} in="extrude-color" result="extrude-offset" />
          <feColorMatrix
            in="SourceGraphic"
            result="stroke"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 1 0 0 0"
          />
          <feColorMatrix
            in="SourceGraphic"
            result="fill"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 1 0 0 1 0"
          />
          <feConvolveMatrix
            in="stroke"
            result="inner-shadow"
            order="5,5"
            divisor={1}
            kernelMatrix="1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 1"
          />
          <feOffset dx={1} dy={1} in="inner-shadow" result="offset" />
          <feComposite
            operator="in"
            in="offset"
            in2="SourceAlpha"
            result="comp"
          />
          <feFlood floodColor="#000" result="flood3" />
          <feComposite operator="in" in="flood3" in2="comp" result="comp2" />
          <feColorMatrix
            in="comp2"
            result="comp3"
            values="1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 0.5 0"
          />
          <feFlood floodColor="red" result="flood1" />
          <feComposite operator="in" in="flood1" in2="fill" result="fill2" />
          <feFlood floodColor="#fff" result="flood2" />
          <feComposite
            operator="in"
            in="flood2"
            in2="stroke"
            result="stroke2"
          />
          <feMerge result="obj">
            <feMergeNode in="extrude-offset" />
            <feMergeNode in="fill2" />
            <feMergeNode in="comp3" />
          </feMerge>
          <feConvolveMatrix
            in="SourceAlpha"
            result="shadow"
            order="9,9"
            divisor={1}
            kernelMatrix="1,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,1"
          />
          <feOffset dx={15} dy={15} in="shadow" result="shadow-offset" />
          <feFlood floodColor="#444" result="flood-shadow" />
          <feComposite
            operator="in"
            in="flood-shadow"
            in2="shadow-offset"
            result="shadow-color"
          />
          <feMerge>
            <feMergeNode in="shadow-color" />
            <feMergeNode in="obj" />
          </feMerge>
        </filter>
      </defs>
      <g filter="url(#prefix__editing-vintage)" transform="translate(-9 -9)">
        <path
          d="M175.535 93.05h0q0-2.5.64-5.7h0l5.19-27.07h14.14l-5.12 27.26h0q-.57 3.01-.57 5.22h0q0 2.21.92 3.36h0q.93 1.15 2.66 1.15h0q1.73 0 2.82-.45h0q1.08-.44 1.98-1.53h0q1.73-2.18 2.82-7.75h0l5.18-27.26h9.66l-5.12 27.2h0q-1.79 9.09-6.72 12.74h0q-4.8 3.58-14.27 3.58h0q-7.1 0-10.88-3.07h0q-3.33-2.69-3.33-7.68zm71.43 5.09h0q-2.69 2.72-6.37 4.19h0q-3.68 1.47-7.33 1.47h0q-3.65 0-4.93-.64h0l-1.98 10.88-12.99 1.28 8.83-45.44 10.43-1.09-.83 4.42h0q2.69-4.55 8.26-4.55h0q6.27 0 9.6 4.04h0q2.94 3.64 2.94 9.21h0q0 5.57-1.47 9.54h0q-1.47 3.97-4.16 6.69zm-14.47-17.96l-3.39 18.76h0q1.35 1.15 3.01 1.15h0q1.66 0 2.62-.64h0q.96-.64 1.67-1.92h0q1.92-3.46 3.45-13.95h0q.45-3.08.45-6.08h0q0-3.01-.67-3.97h0q-.67-.96-1.95-.96h0q-3.91 0-5.19 7.61h0zm53.76 17.96h0q-2.68 2.72-6.36 4.19h0q-3.68 1.47-7.33 1.47h0q-3.65 0-4.93-.64h0l-1.98 10.88-13 1.28 8.84-45.44 10.43-1.09-.83 4.42h0q2.68-4.55 8.25-4.55h0q6.27 0 9.6 4.04h0q2.95 3.64 2.95 9.21h0q0 5.57-1.48 9.54h0q-1.47 3.97-4.16 6.69zm-14.46-17.96l-3.39 18.76h0q1.34 1.15 3.01 1.15h0q1.66 0 2.62-.64h0q.96-.64 1.66-1.92h0q1.92-3.46 3.46-13.95h0q.45-3.08.45-6.08h0q0-3.01-.67-3.97h0q-.68-.96-1.96-.96h0q-3.9 0-5.18 7.61h0zm43.07-.12h0q.9-2.37.9-4.42h0q0-3.78-3.07-3.78h0q-1.6 0-2.92 1.44h0q-1.31 1.44-1.31 3.24h0q0 1.28 1.03 2.3h0q1.47 1.41 5.24 3.71h0q3.78 2.31 5.22 4.19h0q1.44 1.89 1.44 4.48h0q0 2.6-1.25 4.96h0q-1.25 2.37-3.49 4.04h0q-4.8 3.58-12.48 3.58h0q-4.16 0-7.36-2.18h0q-3.2-2.11-3.2-4.6h0q0-2.5 1.83-3.97h0q1.82-1.47 4.51-1.47h0q2.69 0 4.35 1.02h0q-.83 2.11-.83 3.52h0q0 4.22 3.58 4.22h0q1.54 0 2.56-.96h0q1.03-.96 1.03-2.62h0q0-3.26-5.51-6.72h0q-4.48-2.94-5.5-4.1h0q-1.73-2.04-1.73-4.6h0q0-2.56 1.22-5h0q1.21-2.43 3.45-4.16h0q4.68-3.58 12.8-3.58h0q4.16 0 6.63 1.66h0q2.46 1.67 2.46 4.48h0q0 2.82-1.69 4.42h0q-1.7 1.6-4.77 1.6h0q-2.11 0-3.14-.7z"
          fill="red"
          stroke="#0f0"
          strokeWidth={1.8}
        />
      </g>
      <path
        d="M166.535 84.05h0q0-2.5.64-5.7h0l5.19-27.07h14.14l-5.12 27.26h0q-.57 3.01-.57 5.22h0q0 2.21.92 3.36h0q.93 1.15 2.66 1.15h0q1.73 0 2.82-.45h0q1.08-.44 1.98-1.53h0q1.73-2.18 2.82-7.75h0l5.18-27.26h9.66l-5.12 27.2h0q-1.79 9.09-6.72 12.74h0q-4.8 3.58-14.27 3.58h0q-7.1 0-10.88-3.07h0q-3.33-2.69-3.33-7.68zm71.43 5.09h0q-2.69 2.72-6.37 4.19h0q-3.68 1.47-7.33 1.47h0q-3.65 0-4.93-.64h0l-1.98 10.88-12.99 1.28 8.83-45.44 10.43-1.09-.83 4.42h0q2.69-4.55 8.26-4.55h0q6.27 0 9.6 4.04h0q2.94 3.64 2.94 9.21h0q0 5.57-1.47 9.54h0q-1.47 3.97-4.16 6.69zm-14.47-17.96l-3.39 18.76h0q1.35 1.15 3.01 1.15h0q1.66 0 2.62-.64h0q.96-.64 1.67-1.92h0q1.92-3.46 3.45-13.95h0q.45-3.08.45-6.08h0q0-3.01-.67-3.97h0q-.67-.96-1.95-.96h0q-3.91 0-5.19 7.61h0zm53.76 17.96h0q-2.68 2.72-6.36 4.19h0q-3.68 1.47-7.33 1.47h0q-3.65 0-4.93-.64h0l-1.98 10.88-13 1.28 8.84-45.44 10.43-1.09-.83 4.42h0q2.68-4.55 8.25-4.55h0q6.27 0 9.6 4.04h0q2.95 3.64 2.95 9.21h0q0 5.57-1.48 9.54h0q-1.47 3.97-4.16 6.69zm-14.46-17.96l-3.39 18.76h0q1.34 1.15 3.01 1.15h0q1.66 0 2.62-.64h0q.96-.64 1.66-1.92h0q1.92-3.46 3.46-13.95h0q.45-3.08.45-6.08h0q0-3.01-.67-3.97h0q-.68-.96-1.96-.96h0q-3.9 0-5.18 7.61h0zm43.07-.12h0q.9-2.37.9-4.42h0q0-3.78-3.07-3.78h0q-1.6 0-2.92 1.44h0q-1.31 1.44-1.31 3.24h0q0 1.28 1.03 2.3h0q1.47 1.41 5.24 3.71h0q3.78 2.31 5.22 4.19h0q1.44 1.89 1.44 4.48h0q0 2.6-1.25 4.96h0q-1.25 2.37-3.49 4.04h0q-4.8 3.58-12.48 3.58h0q-4.16 0-7.36-2.18h0q-3.2-2.11-3.2-4.6h0q0-2.5 1.83-3.97h0q1.82-1.47 4.51-1.47h0q2.69 0 4.35 1.02h0q-.83 2.11-.83 3.52h0q0 4.22 3.58 4.22h0q1.54 0 2.56-.96h0q1.03-.96 1.03-2.62h0q0-3.26-5.51-6.72h0q-4.48-2.94-5.5-4.1h0q-1.73-2.04-1.73-4.6h0q0-2.56 1.22-5h0q1.21-2.43 3.45-4.16h0q4.68-3.58 12.8-3.58h0q4.16 0 6.63 1.66h0q2.46 1.67 2.46 4.48h0q0 2.82-1.69 4.42h0q-1.7 1.6-4.77 1.6h0q-2.11 0-3.14-.7z"
        fill="none"
        stroke="#fff"
        strokeWidth={2.1}
      />
      <style />
    </svg>
  );
}

export default SvgComponent;
