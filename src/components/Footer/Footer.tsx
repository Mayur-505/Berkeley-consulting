import { Grid } from '@mui/material'
import React, { useContext } from 'react'
import { useTranslation } from 'react-i18next'
import styles from './footer.module.css'
import LanguageContext from '@/context/language'

interface FooterProps {
  onClick?: boolean
}

const Footer: React.FC<FooterProps> = ({ onClick }) => {
  const { t } = useTranslation()
  const { lang } = useContext(LanguageContext)
  return (
    <div className="bg-white flex flex-col px-0 pb-0 items-center justify-start relative text-left text-base text-white font-general-sans">
      <div className="container z-[2]">
        <div className={`rounded-3xl bg-greys-grey-08 lg:py-[60px] lg:px-[120px] md:py-[60px] md:px-[90px] box-border items-center justify-between text-13xl mb-[-100px] mx-[20px] ${styles.footerbanner}`}>
          <div className={`flex flex-wrap items-center justify-between ${styles.footerbannerinner}`}>
            <div className="flex flex-col items-start justify-start">
              <b className="relative leading-[40px] inline-block max-w-[555px]">
                <p className={`m-0 ${lang === 'ko' ? "font-light" : ""}`}>{t("footer.banner.title")}</p>
                <p className="m-0">{t("footer.banner.text")} 😁</p>
              </b>
            </div>
            <div className={`rounded-35xl bg-greys-grey-01 overflow-hidden flex flex-row py-4 px-[30px] items-center justify-start gap-[14px] text-center text-lg text-greys-grey-10 cursor-pointer ${styles.quoteButton}`} onClick={onClick}>
              <div className="relative tracking-[0.02em] leading-[24px] font-medium">
                {t("footer.banner.button")}
              </div>
              <img
                className="relative w-6 h-6 overflow-hidden shrink-0"
                alt=""
                src="/arrow3.svg"
              />
            </div>
          </div>
        </div>
      </div>
      <div className={`${styles.footerMenu}`}>
        <div className="container mx-auto">
          <Grid item xs={12} container spacing={4} className='px-[20px] justify-between'>
            {lang === 'en' && <Grid item lg={4} md={12} sm={12} xs={12}>
              <div className="flex flex-col items-start justify-start mb-[20px]">
                <div className="flex flex-col items-start justify-start gap-[16px]">
                  <div className="relative leading-[24px] inline-block w-[296px] opacity-[0.8]">{t("footer.text")}</div>
                  <img
                    className="relative w-[136px] h-[50px] object-cover"
                    alt=""
                    src="/berkeleyconsulting-logo-02-1@2x.png"
                  />
                </div>
              </div>
            </Grid>}
            {lang === 'ko' && <Grid item lg={4} md={6} sm={12} xs={12}>
              <div className="flex flex-col items-start justify-start mb-[20px]">
                <div className="flex flex-col items-start justify-start gap-[16px]">
                  <div className="relative leading-[24px] inline-block w-[296px] opacity-[0.8]">{t("footer.text")}</div>
                  <img
                    className="relative w-[136px] h-[50px] object-cover"
                    alt=""
                    src="/berkeleyconsulting-logo-02-1@2x.png"
                  />
                </div>
              </div>
            </Grid>}
            {lang === 'en' && <> <Grid item lg={2} md={3} sm={6} xs={12}>
              <div className="flex flex-col items-start justify-start gap-[24px] mb-[20px]">
                <div className="relative tracking-[0.04em] leading-[28px] font-medium inline-block h-[26px] shrink-0">
                  {t("footer.company.title")}
                </div>
                <div className="flex flex-col items-start justify-start gap-[16px] opacity-[0.8] text-base">
                  <div className="relative tracking-[0.02em] leading-[24px]">
                    {t("footer.company.text1")}
                  </div>
                  <div className="relative tracking-[0.02em] leading-[24px]">
                    {t("footer.company.text2")}
                  </div>
                  <div className="relative tracking-[0.02em] leading-[24px]">
                    {t("footer.company.text3")}
                  </div>
                  <div className="relative tracking-[0.02em] leading-[24px]">
                    {t("footer.company.text4")}
                  </div>
                </div>
              </div>
            </Grid>
              <Grid item lg={2} md={3} sm={6} xs={12}>
                <div className="flex flex-col items-start justify-start gap-[24px] mb-[20px]">
                  <div className="relative tracking-[0.04em] leading-[28px] font-medium inline-block h-[26px] shrink-0">
                    {t("footer.service.title")}
                  </div>
                  <div className="flex flex-col items-start justify-start gap-[16px] opacity-[0.8] text-base">
                    <div className="relative tracking-[0.02em] leading-[24px]">
                      {t("footer.service.text1")}
                    </div>
                    <div className="relative tracking-[0.02em] leading-[24px]">
                      {t("footer.service.text2")}
                    </div>
                    <div className="relative tracking-[0.02em] leading-[24px]">
                      {t("footer.service.text3")}
                    </div>
                    <div className="relative tracking-[0.02em] leading-[24px]">
                      {t("footer.service.text4")}
                    </div>
                  </div>
                </div>
              </Grid>
              <Grid item lg={2} md={3} sm={6} xs={12}>
                <div className="flex flex-col items-start justify-start gap-[24px] mb-[20px]">
                  <div className="relative tracking-[0.04em] leading-[28px] font-medium inline-block h-[26px] shrink-0">
                    {t("footer.support.title")}
                  </div>
                  <div className="flex flex-col items-start justify-start gap-[16px] opacity-[0.8] text-base">
                    <div className="relative tracking-[0.02em] leading-[24px]">
                      {t("footer.support.text1")}
                    </div>
                    <div className="relative tracking-[0.02em] leading-[24px]">
                      {t("footer.support.text2")}
                    </div>
                    <div className="relative tracking-[0.02em] leading-[24px]">
                      {t("footer.support.text3")}
                    </div>
                    <div className="relative tracking-[0.02em] leading-[24px]">
                      {t("footer.support.text4")}
                    </div>
                  </div>
                </div>
              </Grid>
              <Grid item lg={2} md={3} sm={6} xs={12}>
                <div className="flex flex-col items-start justify-start gap-[24px] mb-[20px]">
                  <div className="relative tracking-[0.04em] leading-[28px] font-medium inline-block h-[26px] shrink-0">
                    {t("footer.help.title")}
                  </div>
                  <div className="flex flex-col items-start justify-start gap-[16px] opacity-[0.8] text-base">
                    <div className="relative tracking-[0.02em] leading-[24px]">
                      {t("footer.help.text1")}
                    </div>
                    <div className="relative tracking-[0.02em] leading-[24px]">
                      {t("footer.help.text2")}
                    </div>
                    <div className="relative tracking-[0.02em] leading-[24px]">
                      {t("footer.help.text3")}
                    </div>
                    <div className="relative tracking-[0.02em] leading-[24px]">
                      {t("footer.help.text4")}
                    </div>
                  </div>
                </div>
              </Grid></>}
            {lang === 'ko' && <Grid item lg={8} md={6} sm={12} xs={12} container spacing={4} className='justify-end'>
              <Grid item lg={3} md={5} sm={6} xs={12}>
              <div className="flex flex-col items-start justify-start gap-[24px] mb-[20px]">
                  <div className="relative tracking-[0.04em] leading-[28px] font-medium inline-block h-[26px] shrink-0">
                    {t("footer.service.title")}
                  </div>
                  <div className="flex flex-col items-start justify-start gap-[16px] opacity-[0.8] text-base">
                    <div className="relative tracking-[0.02em] leading-[24px]">
                      {t("footer.service.text1")}
                    </div>
                    <div className="relative tracking-[0.02em] leading-[24px]">
                      {t("footer.service.text2")}
                    </div>
                    <div className="relative tracking-[0.02em] leading-[24px]">
                      {t("footer.service.text3")}
                    </div>
                    <div className="relative tracking-[0.02em] leading-[24px]">
                      {t("footer.service.text4")}
                    </div>
                  </div>
                </div>
              </Grid>
              <Grid item lg={3} md={5} sm={6} xs={12}>
              <div className="flex flex-col items-start justify-start gap-[24px] mb-[20px]">
                  <div className="relative tracking-[0.04em] leading-[28px] font-medium inline-block h-[26px] shrink-0">
                    {t("footer.service.title")}
                  </div>
                  <div className="flex flex-col items-start justify-start gap-[16px] opacity-[0.8] text-base">
                    <div className="relative tracking-[0.02em] leading-[24px]">
                      {t("footer.service.text1")}
                    </div>
                    <div className="relative tracking-[0.02em] leading-[24px]">
                      {t("footer.service.text2")}
                    </div>
                    <div className="relative tracking-[0.02em] leading-[24px]">
                      {t("footer.service.text3")}
                    </div>
                    <div className="relative tracking-[0.02em] leading-[24px]">
                      {t("footer.service.text4")}
                    </div>
                  </div>
                </div>
              </Grid>
            </Grid>}
          </Grid>
        </div>
      </div>
    </div>
  )
}

export default Footer
