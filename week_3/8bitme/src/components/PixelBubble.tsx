import styles from '../styles/PixelBubble.module.css';

const PixelBubble = ({ 
  children, 
  variant = 'default', // 'default' | 'primary' | 'danger'
  scale = 4,
  className = '' 
}) => {
  
  // Dynamic style object to control variables from Props
  const dynamicStyles = {
    '--pixel-size': `${scale}px`,
    '--bg-color': variant === 'danger' ? '#fee2e2' : '#fff', // pale red or white
    '--text-color': '#000',
  };

  return (
    <div 
      className={`
        relative inline-block 
        font-mono text-sm leading-relaxed
        p-4 m-4
        bg-white
        ${styles.bubble} 
        ${styles['tail-bottom']}
        ${className}
      `}
      style={dynamicStyles}
    >
      {/* This ensures the text sits above the background drawing */}
      <div className="relative z-999 font-pixel text-black">
        {children}
      </div>
    </div>
  );
};

export default PixelBubble;