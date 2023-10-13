import React, { useState } from "react";
import Modal from "react-responsive-modal";
import { FaCopy, FaWhatsapp, FaFacebook } from "react-icons/fa";
import CopyToClipboard from "react-copy-to-clipboard";

import "react-responsive-modal/styles.css"; // Import styles

const ShareModal = ({ open, onClose, linkToShare }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const whatsappLink = `https://api.whatsapp.com/send?text=${encodeURIComponent(
    linkToShare
  )}`;

  const facebookLink = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
    linkToShare
  )}`;

  return (
    <Modal open={open} onClose={onClose} center>
      <h1>Share</h1>
      <div className="p-6">
        <p className="mb-4">{linkToShare}</p>
        <div className="flex space-x-2">
          <CopyToClipboard text={linkToShare} onCopy={handleCopy}>
            <button className="flex items-center bg-blue-500 text-white py-2 px-4 rounded">
              <FaCopy className="mr-1" />
              {copied ? "Copied!" : "Copy Link"}
            </button>
          </CopyToClipboard>
          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center bg-green-500 text-white py-2 px-4 rounded"
          >
            <FaWhatsapp className="mr-1" />
            WhatsApp
          </a>
          <a
            href={facebookLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center bg-blue-700 text-white py-2 px-4 rounded"
          >
            <FaFacebook className="mr-1" />
            Facebook
          </a>
        </div>
      </div>
    </Modal>
  );
};

export default ShareModal;
