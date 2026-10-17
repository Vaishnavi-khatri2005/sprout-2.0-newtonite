/**
 * Onboarding copy in English and Hindi.
 * The Hindi translation is a prototype and may be incomplete or imperfect.
 */
export type Lang = 'en' | 'hi'

const en = {
  stepOf: (n: number) => `Step ${n} of 5`,
  progressLabel: 'Onboarding progress',
  back: 'Back',
  continue: 'Continue',
  backHome: 'Back to home',
  homeAria: 'Sprout 2.0 home',
  protoBadge: 'Prototype · demo only',
  risk: 'Mutual fund investments are subject to market risks. Please read all scheme-related documents carefully.',
  riskLabel: 'Risk disclaimer',

  s1: {
    title: 'Your investing journey starts here.',
    body: 'Small steps can help you build confidence as you learn about investing.',
    langLegend: 'Choose your language',
    protoNote: 'The Hindi translation is a prototype and may be incomplete.',
  },

  s2: {
    title: 'A few things before we begin',
    intro: 'Having these ready may make the process easier.',
    legend: 'Tick what you have ready',
    items: [
      { title: 'PAN card', hint: 'Your Permanent Account Number card' },
      { title: 'Aadhaar card', hint: 'Your Aadhaar number or card' },
      { title: 'Mobile number linked to Aadhaar', hint: 'A phone you can access, for one-time codes' },
    ],
    ready: (n: number) => `${n} of 3 ready`,
    note: 'This list is only a guide. Nothing is checked or stored.',
  },

  s3: {
    title: 'Verify your mobile number',
    body: 'Enter a 10-digit mobile number to continue.',
    phoneLabel: 'Mobile number',
    phoneHelp: 'Enter 10 digits. Please use a sample number, not a real one.',
    phoneErrorEmpty: 'Enter your 10-digit mobile number.',
    phoneErrorShort: 'A mobile number needs exactly 10 digits.',
    countryCode: 'Country code +91, India',
    demoNotice: 'Demo only: no real SMS is sent and no actual verification takes place.',
    otpTitle: 'Enter the 6-digit demo code',
    otpHelp: 'Type any 6 digits. Nothing is sent or checked.',
    otpGroup: '6-digit demo code',
    otpDigit: (i: number) => `Digit ${i} of 6`,
    otpError: 'Enter all 6 digits.',
    verify: 'Demo verify',
    change: 'Change number',
    done: 'Demo step complete. Nothing was actually verified.',
  },

  s4: {
    title: 'Let’s prepare your KYC details',
    intro:
      'In a real product, identity details are requested because financial rules require investors to be identified. Here we only practise the steps.',
    demoWarning:
      'Prototype notice: please do not enter your real PAN or Aadhaar details. Nothing you type here is saved, sent or logged.',
    panLabel: 'PAN (sample format)',
    panHelp: 'Format: 5 letters, 4 digits, 1 letter, for example ABCDE1234F.',
    panError: 'This does not match the PAN format: 5 letters, 4 digits, then 1 letter.',
    panOk: 'Format looks right. This is a format check only.',
    useSample: 'Use sample PAN',
    aadhaarLegend: 'Aadhaar preparation',
    aadhaarHelp: 'We do not ask for your Aadhaar number in this prototype. Just confirm you are ready.',
    aadhaarReady: 'I have my Aadhaar card ready',
    aadhaarLinked: 'My mobile number is linked to Aadhaar',
    aadhaarError: 'Please confirm that your Aadhaar card is ready to continue.',
  },

  s5: {
    title: 'You’re ready for the next step',
    body: 'This is a prototype confirmation screen. No actual KYC verification has taken place.',
    body2: 'Nothing here has been submitted, saved or sent, and no notification will be sent.',
    summaryTitle: 'What you practised',
    summary: {
      checklist: (n: number) => `Checklist: ${n} of 3 items marked ready`,
      mobile: (done: boolean): string => (done ? 'Mobile step: demo completed' : 'Mobile step: not completed'),
      pan: (done: boolean): string => (done ? 'PAN: sample format check passed (value not kept)' : 'PAN: format not checked'),
    },
    review: 'Review details',
    backHome: 'Back to homepage',
  },
}

export type Copy = typeof en

const hi: Copy = {
  stepOf: (n) => `चरण ${n} / 5`,
  progressLabel: 'ऑनबोर्डिंग प्रगति',
  back: 'वापस',
  continue: 'जारी रखें',
  backHome: 'होम पर वापस जाएँ',
  homeAria: 'Sprout 2.0 होम',
  protoBadge: 'प्रोटोटाइप · केवल डेमो',
  risk: 'म्यूचुअल फंड निवेश बाज़ार जोखिमों के अधीन हैं। कृपया सभी योजना-संबंधित दस्तावेज़ ध्यान से पढ़ें।',
  riskLabel: 'जोखिम सूचना',

  s1: {
    title: 'आपकी निवेश यात्रा यहीं से शुरू होती है।',
    body: 'छोटे कदम निवेश के बारे में सीखते हुए आपका आत्मविश्वास बढ़ाने में मदद कर सकते हैं।',
    langLegend: 'अपनी भाषा चुनें',
    protoNote: 'हिंदी अनुवाद प्रोटोटाइप है और अधूरा हो सकता है।',
  },

  s2: {
    title: 'शुरू करने से पहले कुछ बातें',
    intro: 'इन्हें तैयार रखने से प्रक्रिया आसान हो सकती है।',
    legend: 'जो आपके पास तैयार है, उस पर निशान लगाएँ',
    items: [
      { title: 'पैन कार्ड', hint: 'आपका स्थायी खाता संख्या (पैन) कार्ड' },
      { title: 'आधार कार्ड', hint: 'आपका आधार नंबर या कार्ड' },
      { title: 'आधार से जुड़ा मोबाइल नंबर', hint: 'ऐसा फ़ोन जिसे आप चला सकें, ताकि वन-टाइम कोड मिल सके' },
    ],
    ready: (n) => `3 में से ${n} तैयार`,
    note: 'यह सूची केवल मार्गदर्शन के लिए है। कुछ भी जाँचा या सहेजा नहीं जाता।',
  },

  s3: {
    title: 'अपना मोबाइल नंबर सत्यापित करें',
    body: 'आगे बढ़ने के लिए 10 अंकों का मोबाइल नंबर दर्ज करें।',
    phoneLabel: 'मोबाइल नंबर',
    phoneHelp: '10 अंक दर्ज करें। कृपया असली नहीं, नमूना नंबर इस्तेमाल करें।',
    phoneErrorEmpty: 'अपना 10 अंकों का मोबाइल नंबर दर्ज करें।',
    phoneErrorShort: 'मोबाइल नंबर में ठीक 10 अंक होने चाहिए।',
    countryCode: 'देश कोड +91, भारत',
    demoNotice: 'केवल डेमो: कोई वास्तविक एसएमएस नहीं भेजा जाता और कोई वास्तविक सत्यापन नहीं होता।',
    otpTitle: '6 अंकों का डेमो कोड दर्ज करें',
    otpHelp: 'कोई भी 6 अंक लिखें। कुछ भी भेजा या जाँचा नहीं जाता।',
    otpGroup: '6 अंकों का डेमो कोड',
    otpDigit: (i) => `6 में से अंक ${i}`,
    otpError: 'सभी 6 अंक दर्ज करें।',
    verify: 'डेमो सत्यापन',
    change: 'नंबर बदलें',
    done: 'डेमो चरण पूरा हुआ। वास्तव में कुछ भी सत्यापित नहीं हुआ।',
  },

  s4: {
    title: 'आइए आपकी केवाईसी जानकारी तैयार करें',
    intro:
      'असली उत्पाद में पहचान की जानकारी इसलिए माँगी जाती है क्योंकि वित्तीय नियमों के अनुसार निवेशकों की पहचान ज़रूरी होती है। यहाँ हम केवल चरणों का अभ्यास करते हैं।',
    demoWarning:
      'प्रोटोटाइप सूचना: कृपया अपना असली पैन या आधार विवरण दर्ज न करें। यहाँ लिखी कोई भी जानकारी सहेजी, भेजी या लॉग नहीं की जाती।',
    panLabel: 'पैन (नमूना प्रारूप)',
    panHelp: 'प्रारूप: 5 अक्षर, 4 अंक, 1 अक्षर, जैसे ABCDE1234F।',
    panError: 'यह पैन प्रारूप से मेल नहीं खाता: 5 अक्षर, 4 अंक, फिर 1 अक्षर।',
    panOk: 'प्रारूप सही लगता है। यह केवल प्रारूप की जाँच है।',
    useSample: 'नमूना पैन भरें',
    aadhaarLegend: 'आधार की तैयारी',
    aadhaarHelp: 'इस प्रोटोटाइप में हम आपका आधार नंबर नहीं माँगते। बस पुष्टि करें कि आप तैयार हैं।',
    aadhaarReady: 'मेरा आधार कार्ड तैयार है',
    aadhaarLinked: 'मेरा मोबाइल नंबर आधार से जुड़ा है',
    aadhaarError: 'आगे बढ़ने के लिए कृपया पुष्टि करें कि आपका आधार कार्ड तैयार है।',
  },

  s5: {
    title: 'आप अगले चरण के लिए तैयार हैं',
    body: 'यह एक प्रोटोटाइप पुष्टि स्क्रीन है। कोई वास्तविक केवाईसी सत्यापन नहीं हुआ है।',
    body2: 'यहाँ कुछ भी जमा, सहेजा या भेजा नहीं गया है, और कोई सूचना नहीं भेजी जाएगी।',
    summaryTitle: 'आपने क्या अभ्यास किया',
    summary: {
      checklist: (n) => `चेकलिस्ट: 3 में से ${n} चीज़ें तैयार चिह्नित`,
      mobile: (done) => (done ? 'मोबाइल चरण: डेमो पूरा' : 'मोबाइल चरण: पूरा नहीं हुआ'),
      pan: (done) => (done ? 'पैन: नमूना प्रारूप जाँच सफल (मान सहेजा नहीं गया)' : 'पैन: प्रारूप जाँचा नहीं गया'),
    },
    review: 'विवरण देखें',
    backHome: 'होमपेज पर वापस जाएँ',
  },
}

export const copy: Record<Lang, Copy> = { en, hi }
