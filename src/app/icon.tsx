import { ImageResponse } from 'next/og';

export const size = {
  width: 64,
  height: 64
};

export const contentType = 'image/png';

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          background: 'linear-gradient(140deg, #0f172a 0%, #1e293b 100%)'
        }}
      >
        <div
          style={{
            width: 46,
            height: 46,
            borderRadius: 14,
            border: '2px solid rgba(56, 189, 248, 0.45)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: '#f8fafc',
            fontSize: 20,
            fontWeight: 700,
            fontFamily: 'system-ui'
          }}
        >
          MK
        </div>
      </div>
    ),
    size
  );
}