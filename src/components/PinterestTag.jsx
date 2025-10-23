import { useEffect } from "react";

const PinterestTag = () => {
  useEffect(() => {
    try {
      if (typeof window === 'undefined' || typeof document === 'undefined') return;

      (function (e) {
        if (!window.pintrk) {
          window.pintrk = function () {
            window.pintrk.queue.push(Array.prototype.slice.call(arguments));
          };
          var n = window.pintrk;
          n.queue = [];
          n.version = "3.0";
          var t = document.createElement("script");
          t.async = true;
          t.src = e;
          var scripts = document.getElementsByTagName("script");
          var r = scripts && scripts.length ? scripts[0] : null;
          if (r && r.parentNode) {
            r.parentNode.insertBefore(t, r);
          } else if (document.head) {
            document.head.appendChild(t);
          }
        }
      })("https://s.pinimg.com/ct/core.js");

      if (window.pintrk) {
        try {
          window.pintrk("load", "YOUR_TAG_ID", { em: "<user_email_address>" });
          window.pintrk("page");
        } catch (e) {
          // ignore errors if pintrk isn't ready
        }
      }
    } catch (err) {
      // In test or non-browser environments, silently ignore
    }
  }, []);

  return null;
};

export default PinterestTag;
