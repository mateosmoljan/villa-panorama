interface IFrameMapsProps {
  className?: string;
}

function IFrameMaps({ className }: IFrameMapsProps) {
  return (
    <iframe
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d118622.73643797595!2d13.808553305664901!3d44.98430938619968!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x477cc9507d05c359%3A0xba7a1886b81df385!2sVilla%20Panorama!5e0!3m2!1shr!2shr!4v1714162438075!5m2!1shr!2shr"
      className={`w-full h-full ${className}`}
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
    ></iframe>
  );
}

export default IFrameMaps;
