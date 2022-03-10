import React from "react";
import "./css/SocialMediaLink.css";
export default function SocialMediaLinks({ url, title }) {
  return (
    <div className="socialMedia">
      <a
        title="Share on Twitter"
        target="_blank"
        rel="noopener noreferrer"
        href={`https://twitter.com/intent/tweet?url=${url}`}
      >
        <img
          className="socialMediaIcon"
          src="https://img.icons8.com/fluency/50/000000/twitter.png"
          alt="Share on Twitter"
        />
      </a>
      <a
        title="Share on Telegram"
        target="_blank"
        rel="noopener noreferrer"
        href={`https://telegram.me/share/url?url=${url}&text=${title}`}
      >
        <img
          className="socialMediaIcon"
          src="https://img.icons8.com/fluency/48/000000/telegram-app.png"
          alt="Share on Telegram"
        />
      </a>
      <a
        title="Share on Facebook"
        target="_blank"
        rel="noopener noreferrer"
        href={`https://www.facebook.com/sharer.php?u=${url}&amp;text=${title}`}
      >
        <img
          className="socialMediaIcon"
          src="https://img.icons8.com/fluency/48/000000/facebook-new.png"
          alt="Share on Facebook"
        />
      </a>
      <a
        target="_blank"
        title="Share on WhatsApp"
        rel="noopener noreferrer"
        href={`whatsapp://send?text=${title} ${url}`}
      >
        <img
          className="socialMediaIcon"
          src="https://img.icons8.com/fluency/48/000000/whatsapp.png"
          alt="Share on WhatsApp"
        />
      </a>
    </div>
  );
}