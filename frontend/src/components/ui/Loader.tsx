interface Props {
  className?: string;
  size?: number;
  marginAuto?: boolean;
}

export const Loader = ({ className = '', size = 10, marginAuto = true }: Props) => (
  <div className={`${className} w-${size} ${marginAuto ? 'mx-auto' : ''}`}>
    <div>
      <p>Loading listings...</p>
      <span className='sr-only'>Loading listings...</span>
    </div>
  </div>
);
