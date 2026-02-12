import clsx from "clsx";

function Office({ name, children, invert = false }) {
  return (
    <address
      className={clsx(
        "text-sm not-italic",
        invert ? "text-neutral-300" : "text-neutral-600"
      )}
    >
      <strong className={invert ? "text-white" : "text-neutral-950"}>
        {name}
      </strong>
      <br />
      {children}
    </address>
  );
}

const Offices = ({ invert = false, ...props }) => {
  return (
    <div {...props}>
      {/* Offices List */}
      <ul role="list" className="grid gap-6 sm:grid-cols-2">
        <li>
          <Office name="My Office" invert={invert}>
            Puduvadavalli
            <br />
            Sathyamangalam
            <br />
            Tamil Nadu
            <br />
            638401
          </Office>
        </li>
        <li>
        </li>
      </ul>

      {/* Google Map Embed */}
      <div className="mt-8 w-full h-72 overflow-hidden rounded-2xl shadow-lg">
        <iframe
          title="Developer Location"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2038.1507057639194!2d77.17957925005575!3d11.540940953263911!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba8d89144faf4a1%3A0x3d175cf2538b676c!2sPuduvadavalli%2C%20Tamil%20Nadu%20638401!5e1!3m2!1sen!2sin!4v1770814402985!5m2!1sen!2sin"
          width="100%"
          height="100%"
          className="border-0 filter grayscale contrast-125"
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  );
};

export default Offices;
