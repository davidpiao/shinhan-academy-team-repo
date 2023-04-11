import React from "react";
import InstagramIcon from "@material-ui/icons/Instagram";
import TwitterIcon from "@material-ui/icons/Twitter";
import FacebookIcon from "@material-ui/icons/Facebook";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import "../styles/Footer.css";

function Footer() {
  return (
    <div class="footer">
      <div class="size">
        <div class="info">
          <p>신한DS SW아카데미</p>
          <p>서울시 마포구 월드컵북로 4길 77</p>
          <p>대표자 서민구 | 개인정보책임자 홍길동</p>
          <p>02-1234-5678 | 02-9876-5432</p>
          <p>사업자번호 123-45-6789</p>
        </div>
        <div className="sns_area">
          <InstagramIcon /> <TwitterIcon /> <FacebookIcon /> <LinkedInIcon />
        </div>
      </div>
    </div>
  );
}

export default Footer;
