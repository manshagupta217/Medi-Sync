import i18n from "i18next"
import { initReactI18next } from "react-i18next"

const resources = {
  en: {
    translation: {
       appName: "MediSync",
      platform: "National Digital Health Platform",
      signin: "Sign In",
      email: "Email Address",
      password: "Password",
      selectRole: "Select your role",
      phone: "Phone Number"
    }
  },

  hi: {
    translation: {
    appName: "मेडीसिंक",
      platform: "राष्ट्रीय डिजिटल स्वास्थ्य मंच",
      signin: "साइन इन",
      email: "ईमेल पता",
      password: "पासवर्ड",
      selectRole: "अपनी भूमिका चुनें",
      phone: "फोन नंबर"
    }
  },

  mr: {
    translation: {
      appName: "मेडीसिंक",
      platform: "राष्ट्रीय डिजिटल आरोग्य मंच",
      signin: "साइन इन",
      email: "ईमेल पत्ता",
      password: "पासवर्ड",
      selectRole: "आपली भूमिका निवडा",
      phone: "फोन नंबर"
    }
  },

  gu: {
    translation: {
       appName: "મેડીસિંક",
      platform: "રાષ્ટ્રીય ડિજિટલ હેલ્થ પ્લેટફોર્મ",
      signin: "સાઇન ઇન",
      email: "ઇમેલ સરનામું",
      password: "પાસવર્ડ",
      selectRole: "તમારી ભૂમિકા પસંદ કરો",
      phone: "ફોન નંબર"
    }
  }
}

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: "en",
    interpolation: {
      escapeValue: false
    }
  })

export default i18n