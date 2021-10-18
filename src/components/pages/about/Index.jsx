import React, { useEffect } from "react";
import { useTranslation } from "react-i18next";
import SectionBanner from "../../layouts/SectionBanner";
import History from "./History";
import HowToJoin from "./HowToJoin";
import Team from "./Team";

const Index = () => {
  const { t } = useTranslation("translation");

  useEffect(() => {
    window.scrollTo(0, 250);
  }, []);

  return (
    <div id="about">
      <SectionBanner
        title={t("about.banner.ABOUT_BANNER_TITLE")}
        breadcrumbPrevText={t("navbar.NAVBAR_ITEM_HOME")}
        breadcrumbPrevLink="/"
        breadcrumbCurrentText={t("navbar.NAVBAR_ITEM_ABOUT")}
      />
      <History />
      <HowToJoin />
      <Team />
    </div>
  );
};

export default Index;
