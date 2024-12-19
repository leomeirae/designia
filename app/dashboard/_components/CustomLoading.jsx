import Image from 'next/image';

const CustomLoading = () => {
  return (
    <Image 
        src={'/loading.gif'} 
        alt='Loading animation'
        width={100}
        height={100}
    />
  );
};

export default CustomLoading; 