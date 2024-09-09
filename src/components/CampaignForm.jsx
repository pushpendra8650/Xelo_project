import { useState, useEffect } from 'react';

import { GoX } from "react-icons/go";
import { HiMagnifyingGlass } from "react-icons/hi2";

const CampaignForm = () => {
  const initialFormData = {
    campaign_type: '',
    campaign_name: '',
    promotion_goal: '',
    secondary_goal: '',
      re_target: ''
  };
  const [formDatacampaign, setFormData] = useState(initialFormData);
  const [validationErrors, setValidationErrors] = useState({});


  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    if (type === 'checkbox') {
      setFormData({
        ...formDatacampaign,
        [name]: checked ? value : ''
      });
    } else {
      setFormData({
        ...formDatacampaign,
        [name]: value
      });
    }
  };

  const handleGoalChange = (goal) => {
    setFormData({
      ...formDatacampaign,
      promotion_goal: goal
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    let errors = {};
    if (!formDatacampaign.campaign_type) {
      errors.campaign_type = 'please select one of these question';
    }
    if (!formDatacampaign.campaign_name) {
      errors.campaign_name = 'Campaign Name is required';
    }
    if (!formDatacampaign.promotion_goal) {
      errors.promotion_goal = 'Promotion Goal is required';
    }
  
    if (!formDatacampaign.secondary_goal) {
      errors.secondary_goal = 'Secondary Goal is required';
    }
    if (!formDatacampaign.re_target) {
      errors.re_target = 'Targeting option is required';
    }
    setValidationErrors(errors);
  
    // Stop submission if there are errors
    if (Object.keys(errors).length === 0) {
      // Perform form submission or other logic
      localStorage.setItem('formData', JSON.stringify(formDatacampaign));
    }
   
    // Reset form data to initial state
    // setFormData(initialFormData);
// data store into localstorage
    // localStorage.setItem('formData', JSON.stringify(formDatacampaign));
  };



  // targeting form handling
  const initialFormDataTargeting = {
    targeting_name: ''
  };
  
  const [formDataTargeting, setFormDataTargeting] = useState(initialFormDataTargeting);
  const [validationErrorsTargeting, setValidationErrorsTargeting] = useState({});

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormDataTargeting({
      ...formDataTargeting,
      [name]: value,
    });
  };

  const handleSubmitTargeting = (e) => {
    e.preventDefault();
    let errors = {};

    if (!formDataTargeting. targeting_name) {
      errors. targeting_name = 'Targeting Name required';
    }
    setValidationErrorsTargeting(errors);

    
    // Reset form data to initial state
    // setFormDataTargeting(initialFormDataTargeting);

    // localStorage.setItem('formData', JSON.stringify(formDataTargeting));
  };


 // promotion object form functionality
 const [previewUrl, setPreviewUrl] = useState('');
  const [activeButton, setActiveButton] = useState('');
  const [isClickedGoogleApp, setIsClickedGoogleApp] = useState(false);
  const [isClickedAppStore, setIsClickedAppStore] = useState(false);
  const [validationErrorspromotionobject, setvalidationErrorspromotionobject] = useState({});

  const handleClickGoogleApp = () => {
    setIsClickedGoogleApp(true);
    setIsClickedAppStore(false);
    setFormDataPromotionObject(prevState=>({
      ...prevState,
      application:'Google App',
    }))

  };

  const handleClickAppStore = () => {
    setIsClickedAppStore(true);
    setIsClickedGoogleApp(false);
    setFormDataPromotionObject(prevState=>({
      ...prevState,
      application:'App Store',
    }))
  };

  const handleButtonClick = (url) => {
    setPreviewUrl(url);
    setActiveButton(url);
    setFormDataPromotionObject(prevState=>({
      ...prevState,
      preview_url:url,
    }))
  };

  // const resetForm = () => {
  //   setPreviewUrl('');
  //   setActiveButton('');
  //   setIsClickedGoogleApp(false);
  //   setIsClickedAppStore(false);
    
  // };

const [formDataPromotionObject, setFormDataPromotionObject] = useState({
  preview_url:' ',
  currency:' ',
  status: ' ',
  application:'',
  });
  const handleSubmitpromotion = (e) => {
    e.preventDefault();

    // validation 
    let errors = {};

    if (!formDataPromotionObject.application) {
      errors.application = 'Field required';
    }
    setvalidationErrorspromotionobject(errors);


    setFormDataPromotionObject(prevState =>({
      ...prevState,
      currency: document.querySelector("select[name='currency']").value,
      status: document.querySelector("select[name='status']").value,
    }));

    // // resetForm();
  };




 // placement form functionality
 const [expandedSection, setExpandedSection] = useState(null);
 const [validationErrorsplacement, setvalidationErrorsplacement] = useState({});
  const [formDataplacement, setFormDataplacement] = useState({
    placement: '',
    subPlacement: '',
  });

  const placements = [
    { value: 'OEM', label: 'OEM' },
    { value: 'InApp', label: 'In App' },
    { value: 'PremiumInventory', label: 'Premium Inventory' },
    { value: 'DeveloperTraffic', label: 'Developer Traffic' },
    { value: 'Incent', label: 'Incent' },
  ];

  const handleRadioChange = (value) => {
    setExpandedSection(expandedSection === value ? null : value);
    setFormDataplacement({ ...formDataplacement, placement: value, subPlacement: '' });
  };

  const handleSubPlacementChange = (value) => {
    setFormDataplacement({ ...formDataplacement, subPlacement: value });
  };

  const handleSubmitplacement = (e) => {
    e.preventDefault();

     // validation 
     let errors = {};

     if (!formDataplacement. placement) {
       errors. placement = 'Field required';
     }

    //  if (!formDataplacement. subPlacement) {
    //   errors.  subPlacement = 'Field required';
    // }


     setvalidationErrorsplacement(errors);
    // Reset form after submission
    // setExpandedSection(null);
    // setFormDataplacement({
    //   placement: '',
    //   subPlacement: '',
    // });
    
  };


  // drop down functionality

  // const countryData = [
  //   'United States', 'Canada', 'United Kingdom', 'Australia', 'Germany', 'France', 
  //   'Italy', 'Spain', 'Brazil', 'Mexico'
  // ];
  
  const languageData = [
    'China', 'India', 'Japan', 'South Korea', 'Singapore', 'Indonesia', 
    'Malaysia', 'Philippines', 'Thailand', 'Vietnam'
  ];
  
  const intrestTagData = [
    'Finance',
    'Food & Drink Shopping',
    'Health & Fitness',
    'Business',
   
    'Sports',
    'Social media',
    'Lifestyle',
    // Add more interest tags as needed
  ];
  
  const [countries, setcountries] = useState([]);
  const [languages, setlanguages] = useState([]);
  const [interest_tags, setintrest_tag] = useState([]);
  
  
  const [showInterestCheckboxes, setShowInterestCheckboxes] = useState(false);
  const [showLanguageCheckboxes, setShowLanguageCheckboxes] = useState(false);
  
  const [isInterestAllActive, setIsInterestAllActiveIntrest] = useState(false);
  const [isLanguageAllActive, setIsLanguageAllActive] = useState(false);
  const [isLimitedActive, setIsLimitedActive] = useState(false);
  const [isLimitedActiveIntrest, setIsLimitedActiveIntrest] = useState(false);
  
  const [searchTermFirstSection, setSearchTermFirstSection] = useState('');
  const [searchTermSecondSection, setSearchTermSecondSection] = useState('');
  
  useEffect(() => {
    const fetchCountryData = async () => {
      try {
        const response = await fetch('https://restcountries.com/v3.1/all');
        const data = await response.json();
        // Extract country names
        const countryNames = data.map((country) => country.name.common);
        // Set an empty array to the countries state
        setcountries([]);
        // Set the countryNames to a separate state to display all countries
        setAllCountries(countryNames);
      } catch (error) {
        console.error('Error fetching country data:', error);
      }
    };
  
    fetchCountryData();
  }, []);
  
  // Add a new state to store all countries
  const [allCountries, setAllCountries] = useState([]);
  
  const toggleOption = (option, section) => {
    if (section === 'first') {
      setcountries(prevCountries => {
        if (prevCountries.includes(option)) {
          return prevCountries.filter(country => country !== option);
        } else {
          return [...prevCountries, option];
        }
      });
    } else if (section === 'second') {
      setlanguages(prevSelectedOption =>
        prevSelectedOption.includes(option)
          ? prevSelectedOption.filter(item => item !== option)
          : [...prevSelectedOption, option]
      );
    } else if (section === 'interest') {
      setintrest_tag(prevSelectedOption =>
        prevSelectedOption.includes(option)
          ? prevSelectedOption.filter(item => item !== option)
          : [...prevSelectedOption, option]
      );
    }
  };
  
  const handleInterestAllClick = () => {
    setShowInterestCheckboxes(false);
    setIsInterestAllActiveIntrest(true);
    setIsLimitedActiveIntrest(false);
    setintrest_tag(intrestTagData);
  };
  
  const handleLanguageAllClick = () => {
    setShowLanguageCheckboxes(false);
    setIsLanguageAllActive(true);
    setIsLimitedActive(false);
  };
  
  const handleLimitedClick = () => {
    setShowLanguageCheckboxes(true);
    setIsLanguageAllActive(false);
    setIsLimitedActive(true);
  };
  
  const handleLimitedClickInterest = () => {
    setShowInterestCheckboxes(true);
    setIsInterestAllActiveIntrest(false);
    setIsLimitedActiveIntrest(true);
  };
  
  const getButtonStyles = (isActive) => {
    return isActive
      ? 'font-sans text-sm font-xs bg-blue-500 text-white'
      : 'font-sans text-sm font-xs bg-white text-gray-600 border border-gray-300';
  };
  
  const filtercountryData = (countryData, searchTerm) => {
    return countryData.filter(country =>
      country.toLowerCase().includes(searchTerm.toLowerCase())
    );
  };
  
  const [isLimitedActiveage, setIsLimitedActiveage] = useState(false);
  const [age, setage] = useState({
    '3-16': false,
    '17-40': false,
    '41-60': false,
    '60+': false,
  });
  
  const handleLimitedClickage = () => {
    setIsLimitedActiveage(true);
  };
  
  const handleAllClickage = () => {
    setIsLimitedActiveage(false);
  };
  
  const handleCheckboxChangeDropDown = (e) => {
    const { id, checked } = e.target;
    setage(prevState => ({ ...prevState, [id]: checked }));
  };

  const buttonStylesage = (isActiveage) =>
    isActiveage
      ? 'bg-blue-500 text-white'
      : 'bg-white text-gray-600 border border-gray-300';

      const [formDataDropDown, setFormDataDropDown] = useState({
        countries: '',
        languages:' ',
        interest_tags:'',
      showInterestCheckboxes: ' ',
      showLanguageCheckboxes: ' ',
      age: ' ',
      isInterestAllActive: ' ',
      isLanguageAllActive: ' ',
      isLimitedActive: '',
      isLimitedActiveIntrest:' '
      });

  const handleSubmitDropDown = (e) => { 
    e.preventDefault();
  
    const selectedValuesAges = Object.entries(age)
      .filter(([_, isChecked]) => isChecked)
      .map(([id]) => id);
  
    setFormDataDropDown({
      ...formDataDropDown,
      countries,
      languages,
      interest_tags,
      showInterestCheckboxes,
      showLanguageCheckboxes,
      age: selectedValuesAges,
      isInterestAllActive,
      isLanguageAllActive,
      isLimitedActive,
      isLimitedActiveIntrest
    })
  
    setage({
     '3-16': false,
    '17-40': false,
    '41-60': false,
    '60+': false,
    });
    setIsLimitedActiveage(false);
  };

      

 // Machine targetform functionality
 const [selectedNetworkOption, setSelectedNetworkOption] = useState(null);
 const [selectedOSOption, setSelectedOSOption] = useState([]);
 const [selectedScrollOption, setSelectedScrollOption] = useState([]);
 const [showCheckboxes, setShowCheckboxes] = useState(false);
 const [showScrollOptions, setShowScrollOptions] = useState(false);
 const [osType, setOsType] = useState('');

 const options = {
   Android: ['Android 5.0', 'Android 5.0-6.0', 'Android 6.0-7.0', 'Android 7.0-8.0', 'Android 8.0-9.0', 'Android 9.0-10.0', 'Android 10.0-11.0', 'Android 11.0-12.0', 'Android 12.0 and above'],
   IOS: ['IOS 7', 'IOS 8', 'IOS 9', 'IOS 10', 'IOS 11', 'IOS 12', 'IOS 13', 'IOS 14', 'IOS 15 and above']
 };

 const handleNetworkCheckboxChange = (option) => {
   setSelectedNetworkOption(option);
 };

 const handleOSCheckboxChange = (option) => {
   let updatedSelectedOSOption;

   if (option === 'All') {
     if (selectedOSOption.includes('All')) {
       updatedSelectedOSOption = [];
     } else {
       updatedSelectedOSOption = ['All', 'Mobile', 'Tablet', 'Desktop'];
     }
   } else {
     if (selectedOSOption.includes(option)) {
       updatedSelectedOSOption = selectedOSOption.filter(item => item !== option);
     } else {
       updatedSelectedOSOption = [...selectedOSOption, option];
     }

     if (selectedOSOption.includes('All') && option !== 'All') {
       updatedSelectedOSOption = updatedSelectedOSOption.filter(item => item !== 'All');
     }

     if (updatedSelectedOSOption.length === 3 && !updatedSelectedOSOption.includes('All')) {
       updatedSelectedOSOption = ['All', ...updatedSelectedOSOption];
     }
   }

   setSelectedOSOption(updatedSelectedOSOption);
 };

 const handleScrollCheckboxChange = (option) => {
   if (selectedScrollOption.includes(option)) {
     setSelectedScrollOption(selectedScrollOption.filter(item => item !== option));
   } else {
     setSelectedScrollOption([...selectedScrollOption, option]);
   }
 };

 const handleOSButtonClick = (os) => {
   setOsType(os);
   setShowScrollOptions(true);
   setSelectedScrollOption([]);
 };

 useEffect(() => {
   if (osType) {
     setSelectedScrollOption(options[osType]);
   }
 }, [osType]);

 const [formDataMachineTarget, setFormMachineTarget] = useState({
  networkOption: '',
  osOption: '',
  scrollOption: '',
  osType: ''
});

 const handleFormSubmitmachine = (e) => {
   e.preventDefault();

   // Here you can handle the form submission logic, e.g., send the data to an API

   setFormMachineTarget({
    ...formDataMachineTarget,
    networkOption: selectedNetworkOption,
    osOption: selectedOSOption,
    scrollOption: selectedScrollOption,
    osType: osType
  })

   // Reset form state after submission
  //  setSelectedNetworkOption(null);
  //  setSelectedOSOption([]);
  //  setSelectedScrollOption([]);
  //  setShowCheckboxes(false);
  //  setShowScrollOptions(false);
  //  setOsType('');
 };

 // budeget schedule functionality

  const [formDatabudegetschedule, setFormDatabudegetschedule] = useState({
    timezones: '',
    start_date: '',
    end_date: '',
    daily_budget_amount: '',
    total_budget_amount: '',
  });
  const [isDailyBudgetLimited, setIsDailyBudgetLimited] = useState(false);
  const [isTotalBudgetLimited, setIsTotalBudgetLimited] = useState(false);
  const [daily_budget_amount, setDailyBudget] = useState('');
  const [total_budget_amount, setTotalBudget] = useState('');


  const toggleDailyBudgetVisibility = () => setIsDailyBudgetLimited(!isDailyBudgetLimited);
  const toggleTotalBudgetVisibility = () => setIsTotalBudgetLimited(!isTotalBudgetLimited);

  // Handle form submission
  const handleSubmitbudgetschedule = (e) => {
    e.preventDefault();

    // Gather the form data
    // Update the form data based on the form inputs
  const updatedFormData = {
    ...formDatabudegetschedule,
    timezones: e.target.elements.timezones.value,
    start_date: e.target.elements.start_date.value,
    end_date: e.target.elements.end_date.value,
    daily_budget_amount: isDailyBudgetLimited ? daily_budget_amount : 'Unlimited',
    total_budget_amount: isTotalBudgetLimited ? total_budget_amount : 'Unlimited',
  };

  // Update the state with the new form data
  setFormDatabudegetschedule(updatedFormData);

    // Reset form fields and state
    // setIsDailyBudgetLimited(false);
    // setIsTotalBudgetLimited(false);
    // setDailyBudget('');
    // setTotalBudget('');
    // e.target.reset(); // Reset form fields

  };
   
// Pay out form handling functionality
const [total_budget_payout, setUsdBid] = useState('');

const [cac, setCadBid] = useState('');


const handleSubmitpayout = (e) => {
  e.preventDefault();

 
  const formDataPayout = {
    total_budget_payout,
    cac,
  };

// Reset form fields

  // setUsdBid('');
  // setCadBid('');
  // e.target.reset(); 
};

// creative_optional form handling functionality
const [campaignName, setCampaignName] = useState('');
const [targetingName, setTargetingName] = useState('');
const [creative_optionalName, setcreative_optionalName] = useState('');

const handleSubmitcreative_optional = (e) => {
  e.preventDefault();

  const formDatacreative_optionalform = {
    campaignName,
    targetingName,
    creative_optionalName,
  };

  // Reset form fields and state
  // setCampaignName('');
  // setTargetingName('');
  // setcreative_optionalName('');
  // e.target.reset(); 
};


// Thambnailform functionality
const [formDataThambnail, setFormDataThambnail] = useState({
  thumbnail: null,
  creative_optional: [],
  visibility: true,
  ad_title: '',
  ad_description: '',
  kpi: '',
  event_screenshot_image_format: null,
  mmp_activation_image_format: null,
  campaignDescription: ''
});

// State to manage visibility of file inputs
const [showEventScreenshot, setShowEventScreenshot] = useState(false);
const [showMmpScreenshot, setShowMmpScreenshot] = useState(false);
const [showEventScreenshotURL, setShowEventScreenshotURL] = useState(false);
const [showMmpScreenshotURL, setShowMmpScreenshotURL] = useState(false);

// State to track which format button is active
const [activeEventButton, setActiveEventButton] = useState(null);
const [activeMmpButton, setActiveMmpButton] = useState(null);

// Handle input changes
const handleInputChangeThambnail = (e) => {
  const { name, value, type, checked } = e.target;
  setFormDataThambnail({
    ...formDataThambnail,
    [name]: type === 'checkbox' ? checked : value
  });
};

// Handle file input changes
const handleFileChange = (e) => {
  const { name, files } = e.target;
  if (name === 'creative_optional') {
    // For 'creative_optional', we allow multiple files
    setFormDataThambnail((prevState) => ({
      ...prevState,
      [name]: Array.from(files) // Store multiple files in an array
    }));
  } else {
    setFormDataThambnail({
      ...formDataThambnail,
      [name]: files[0] // For other file inputs, only store a single file
    });
  }
};

const fileToBase64 = (file) => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = (error) => reject(error);
  });
};

// Handle form submission
const handleSubmitThambnail = async(e) => {
  e.preventDefault();
 

  

  // resetForm(); // Reset the form after submission
   const creative_optionalOptionalFiles = await Promise.all(
    formDataThambnail.creative_optional.map((file) => fileToBase64(file))
  );
 
  const dataToStore = {
    ...formDataThambnail,
   
    creative_optional: creative_optionalOptionalFiles, // Include the converted files
  };
  // console.log('Form Data:', dataToStore);
};

// Reset form data and states
const resetForm = () => {
  setFormDataThambnail({
    thumbnail: null,
    creative_optional: null,
    visibility: true,
    ad_title: '',
    ad_description: '',
    kpi: '',
    event_screenshot_image_format: null,
    mmp_activation_image_format: null,
    campaignDescription: ''
  });
  setShowEventScreenshot(false);
  setShowMmpScreenshot(false);
  setShowEventScreenshotURL(false);
  setShowMmpScreenshotURL(false);
  setActiveEventButton(null);
  setActiveMmpButton(null);
};

// Event Screenshot Handlers
const handleEventScreenshotClick = () => {
  setShowEventScreenshot(true);
  setShowEventScreenshotURL(false);
  setActiveEventButton('image');
};

const handleEventScreenshotURLClick = () => {
  setShowEventScreenshotURL(true);
  setShowEventScreenshot(false);
  setActiveEventButton('url');
};

// MMP Screenshot Handlers
const handleMmpScreenshotClick = () => {
  setShowMmpScreenshot(true);
  setShowMmpScreenshotURL(false);
  setActiveMmpButton('image');
};

const handleMmpScreenshotURLClick = () => {
  setShowMmpScreenshotURL(true);
  setShowMmpScreenshot(false);
  setActiveMmpButton('url');
};

// Button style based on active state
const getButtonStylesThambnail = (isActive) => {
  return isActive
    ? 'px-4 py-2 bg-blue-500 text-white rounded font-xs font-sans text-sm border border-gray-300'
    : 'px-4 py-2 bg-white text-gray-600 rounded font-xs font-sans text-sm border border-gray-300';
};



// multiple add button functionality
const [selectedFiles, setSelectedFiles] = useState([]);
const [isButtonClicked, setIsButtonClicked] = useState(false);

const handleFileChangeButton = (event) => {
const files = Array.from(event.target.files);
setSelectedFiles((prevFiles) => [...prevFiles, ...files]);

setFormDataThambnail((prevData) => ({
  ...prevData,
  creative_optional: [...(prevData.creative_optional || []), ...files]
}));
event.target.value = null; // Reset the input so it doesn't retain the file
};

const handleButtonClickthambnail = () => {
document.getElementById('creative_optional-upload').click();
setIsButtonClicked((prevState) => !prevState); // Toggle button s
}
const handleFileDelete = (index) => {
setSelectedFiles((prevFiles) => prevFiles.filter((_, i) => i !== index));
}



// Tracking url form functionality
const [formdataTrackingurl , setFormDatatargeting] = useState({
  cta_url: '',
  vta_url: '',
  deeplink: ''
});

// State for selected checkbox
const [selectedCheckbox, setSelectedCheckbox] = useState('');

// State for button selection
const [selectedButton, setSelectedButton] = useState(null);

// Handle input changes
const handleInputChangetargeting = (e) => {
  const { name, value } = e.target;
  setFormDatatargeting(prevState => ({
    ...prevState,
    [name]: value
  }));
};

// Handle checkbox changes
const handleCheckboxChange = (e) => {
  const { value } = e.target;
  setSelectedCheckbox(value);
};

// Handle form submission
const handleSubmittargeting = () => {
  console.log('Form Data:', formdataTrackingurl);
  console.log('Selected Checkbox:', selectedCheckbox);

  

  // Reset the form
  // resetFormtargeting();
};

// Handle button clicks
const handleButtonClicksubmit = (buttonName) => {
  setSelectedButton(buttonName);
  const alldata = [
    formDatacampaign,
    formDataTargeting,
    formDataPromotionObject,
    formDataplacement,
    formDataDropDown,
    formDataMachineTarget,
    formDatabudegetschedule,
    total_budget_payout,
    cac,
    campaignName,
    targetingName,
    creative_optionalName,
    formDataThambnail,
    formdataTrackingurl,
    selectedCheckbox,
  ];
  
  if (buttonName === 'complete') {
    handleSubmittargeting();    
     console.log("All data", alldata);
  }
 
};


// Reset form data and states
// const resetFormtargeting = () => {
//   setFormDatatargeting({
//     cta: '',
//     vta: '',
//     deeplink: ''
//   });
//   setSelectedCheckbox('');
//   setSelectedButton(null);
// };

// all form button save & next
 //campaign form button
 const [isClickedcampaign, setIsClickedcampaign] = useState(false);

 // Function to handle button click
 const handleClickcampaign = () => {
   setIsClickedcampaign(!isClickedcampaign);
 };
// targeting button
 const [isClickedtargeting, setIsClickedtargeting] = useState(false);

 // Function to handle button click
 const handleClicktargeting = () => {
   setIsClickedtargeting(!isClickedtargeting);
 };

// promotion object
const [isClickedpromotionobject, setIsClickedpromotionobject] = useState(false);

 // Function to handle button click
 const handleClickpromotionobject = () => {
   setIsClickedpromotionobject(!isClickedpromotionobject);
 };

 //placement
const [isClickedplacement, setIsClickedplacement] = useState(false);

// Function to handle button click
const handleClickplacement = () => {
  setIsClickedplacement(!isClickedplacement);
};

// Dropdown
const [isClickeddropdown, setIsClickeddropdown] = useState(false);

// Function to handle button click
const handleClickdropdown = () => {
  setIsClickeddropdown(!isClickeddropdown);
};

// machine Target
const [isClickedmachinetarget, setIsClickedmachinetarget] = useState(false);

// Function to handle button click
const handleClickmachinetarget = () => {
  setIsClickedmachinetarget(!isClickedmachinetarget);
};

// Budget & Schedule
const [isClickedBudgetSchedule, setIsClickedBudgetSchedule] = useState(false);

// Function to handle button click
const handleClickBudgetSchedule = () => {
  setIsClickedBudgetSchedule(!isClickedBudgetSchedule);
};

// Payout
const [isClickedpayout, setIsClickedpayout] = useState(false);

// Function to handle button click
const handleClickpayout = () => {
  setIsClickedpayout(!isClickedpayout);
}

// creative_optional
const [isClickedcreative_optional, setIsClickedcreative_optional] = useState(false);

// Function to handle button click
const handleClickcreative_optional = () => {
  setIsClickedcreative_optional(!isClickedcreative_optional);
}

// thambnail

const [isClickedthambnail, setIsClickedthamnail] = useState(false);

// Function to handle button click
const handleClickthamnail = () => {
  setIsClickedthamnail(!isClickedthambnail);
}


  return (
    <div >
    <div>
    <div>
    <div>
    <div>
    <div>
    <div>
    <div>
      <div>
    <div className="w-full mx-auto h-[98%] bg-white p-12 rounded-lg border border-gray-100 shadow  ">
      <div>
      <h1 className="text-sm mb-6 text-gray-700 font-xs font-semibold">Campaign</h1>
      <form className="space-y-8 ml-4" onSubmit={handleSubmit}>
        {/* Campaign Type */}
        <div className="flex flex-col md:flex-row md:items-center md:space-x-6">
          <label className="text-gray-700 md:w-1/4 font-sans text-sm">Campaign Type</label>
          <div className="flex items-center flex-wrap md:w-1/2 space-x-4 mt-2 md:mt-0 pl-3">
            <div className="flex items-center mb-2 md:mb-0 text-sm">
              <input
                type="checkbox"
                id="performance"
                name="campaign_type"
                value="Performance"
                checked={formDatacampaign.campaign_type === 'Performance'}
                onChange={handleChange}
                className="mr-2"
              />
              <label htmlFor="performance" className="text-gray-700 font-sans text-sm">Performance</label>
            </div>
            <div className="flex items-center mb-2 md:mb-0 text-sm">
              <input
                type="checkbox"
                id="branding"
                name="campaign_type"
                value="Branding"
                checked={formDatacampaign.campaign_type === 'Branding'}
                onChange={handleChange}
                className="mr-2"
              />
              <label htmlFor="branding" className="text-gray-700 font-sans text-sm">Branding</label>
            </div>
            <div className="flex items-center mb-2 md:mb-0 text-sm">
              <input
                type="checkbox"
                id="ctv"
                name="campaign_type"
                value="CTV"
                checked={formDatacampaign.campaign_type === 'CTV'}
                onChange={handleChange}
                className="mr-2"
              />
              <label htmlFor="ctv" className="text-gray-700 font-sans text-sm">CTV</label>
            </div>
            {validationErrors.campaign_type && <p className="text-red-500 text-xs mt-1 ml-5">{validationErrors.campaign_type}</p>}
          </div>
         
        </div>

        {/* Campaign Name */}
        <div className="flex flex-col md:flex-row md:items-center md:space-x-6">
          <label className="block text-gray-700 md:w-1/4 font-sans text-sm">Campaign Name</label>
          <input
            type="text"
            name="campaign_name"
            placeholder="Enter Campaign Name..."
            value={formDatacampaign.campaign_name}
            onChange={handleChange}
            className="mt-2 md:mt-0 w-[50%] md:w-1/3 p-2 border border-gray-300 rounded text-gray-600 text-xs font-sans"
          />
           {validationErrors.campaign_name && <p className="text-red-500 text-xs mt-1">{validationErrors.campaign_name}</p>}
        </div>

        {/* Promotion Goal */}
        <div className="flex flex-col md:flex-row md:items-center md:space-x-6">
          <label className="block text-gray-700 md:w-1/4 font-sans text-sm">Promotion Goal</label>
          <div className="flex space-x-10 mt-2 md:mt-0 md:w-1/2">
            <button
              type="button"
              onClick={() => handleGoalChange('CPI')}
              className={`px-6 py-1 border rounded text-gray-600 text-sm font-sans font-xs ${formDatacampaign.promotion_goal === 'CPI' ? 'bg-blue-500 text-white' : 'border-gray-300'}`}
            >
              CPI
            </button>
            <button
              type="button"
              onClick={() => handleGoalChange('CPA')}
              className={`px-6 py-1 border rounded text-gray-600 text-sm font-sans font-xs ${formDatacampaign.promotion_goal === 'CPA' ? 'bg-blue-500 text-white' : 'border-gray-300'}`}
            >
              CPA
            </button>
            <button
              type="button"
              onClick={() => handleGoalChange('CPC')}
              className={`px-6 py-1 border rounded text-gray-600 text-sm font-sans font-xs ${formDatacampaign.promotion_goal === 'CPC' ? 'bg-blue-500 text-white' : 'border-gray-300'}`}
            >
              CPC
            </button>
            {validationErrors.promotion_goal && <p className="text-red-500 text-xs mt-1 ml-5">{validationErrors.promotion_goal}</p>}
          </div>

        </div>

        {/* Secondary Goal */}
        <div className="flex flex-col md:flex-row md:items-center md:space-x-6">
          <label className="block text-gray-700 md:w-1/4 font-sans text-sm">Secondary Goal</label>
          <input
            type="text"
            name="secondary_goal"
            placeholder="Ex: Registration..."
            value={formDatacampaign.secondary_goal}
            onChange={handleChange}
            className="mt-2 md:mt-0 w-[50%] md:w-1/3 p-2 border border-gray-300 rounded text-gray-600 text-xs font-sans"
          />
           {validationErrors.secondary_goal && <p className="text-red-500 text-xs mt-1 ml-5">{validationErrors.secondary_goal}</p>}
        </div>

        {/* Targeting */}
        <div className="flex flex-col md:flex-row md:items-center md:space-x-6">
          <div className="flex items-center flex-wrap md:w-1/2 space-x-4 mt-2 md:mt-0 ml-[15%]">
            <div className="flex items-center mb-2 md:mb-0 ml-[25%]">
              <input
                type="checkbox"
                id="nonRetargeting"
                name="re_target"
                value="Non-Retargeting"
                checked={formDatacampaign.re_target === 'Non-Retargeting'}
                onChange={handleChange}
                className="mr-2"
              />
              <label htmlFor="nonRetargeting" className="text-gray-700 font-sans text-sm">Non-Retargeting</label>
            </div>
            <div className="flex items-center mb-2 md:mb-0 ml-3">
              <input
                type="checkbox"
                id="retargeting"
                name="re_target"
                value="Retargeting"
                checked={formDatacampaign.re_target === 'Retargeting'}
                onChange={handleChange}
                className="mr-2"
              />
              <label htmlFor="retargeting" className="text-gray-700 font-sans text-sm">Retargeting</label>
              {/* {validationErrors.re_target && <p className="text-red-500 text-xs mt-1">{validationErrors.re_target}</p>} */}
            </div>
          
          </div>
        </div>
        <div className="flex justify-end mt-4">
        <button
      onClick={handleClickcampaign}
      className={`px-4 py-2 rounded-lg font-xs text-sm ${isClickedcampaign ? 'bg-blue-500 text-white' : 'bg-white text-gray-600'} border`}
    >
      save & next
    </button>

        </div>
      </form>
      
      </div>
      
    </div>
    <form onSubmit={handleSubmitTargeting}>
      <div className="w-full mx-auto bg-white p-12 rounded-lg border border-gray-100 shadow mr-4 mt-2">
        <h1 className="mb-6 text-gray-700 font-semibold font-sans text-sm">Targeting</h1>
        <div className="flex md:flex-row md:items-center md:space-x-15 ml-10 w-full">
          <label className="text-gray-700 md:w-1/4 font-xs font-sans text-sm">Targeting Name*</label>
          <div className="flex items-center mb-2 md:mb-0 w-full ml-15">
            <input
              type="text"
              name="targeting_name"
              placeholder="Enter Targeting Name..."
              value={formDataTargeting.targeting_name}
              onChange={handleInputChange}
              className="mt-2 md:mt-0 w-full md:w-[40%] p-2 border border-gray-300 rounded text-gray-600 text-sm font-xs placeholder-gray-400 placeholder:text-xs ml-10"
            />
             {validationErrorsTargeting. targeting_name && <p className="text-red-500 text-xs mt-1 ml-5">{validationErrorsTargeting. targeting_name}</p>}
          </div>
         
        </div>
        <div className="flex justify-end mt-4">
        <button
      onClick={handleClicktargeting}
      className={`px-4 py-2 rounded-lg font-xs text-sm ${isClickedtargeting ? 'bg-blue-500 text-white' : 'bg-white text-gray-600'} border`}
    >
      save & next
    </button>

        </div>
      </div>
    </form>
    </div>

    {/*  promotion form*/}
    <form onSubmit={handleSubmitpromotion}>
      <div className="w-full mx-auto mt-4 bg-white p-12 rounded-lg border border-gray-100 shadow">
        <h1 className="mb-6 text-gray-700 font-semibold font-sans text-sm">Promotion Object</h1>
        
        <div className="flex md:flex-row md:items-center md:space-x-6 ml-10">
          <label className="block text-gray-700 md:w-1/4 font-sans text-sm">Application*</label>
          <div className="flex space-x-4 mt-2 md:mt-0 md:w-2/3">
            <button
              type="button"
              name='application'
              onClick={() => {
                handleButtonClick('https://play.google.com/store/apps/details?id=com.example');
                handleClickGoogleApp();
              }}
              className={`w-full md:w-auto px-9 py-2 border rounded font-sans text-xs ${
                isClickedGoogleApp ? "bg-blue-500 text-white" : "bg-white text-gray-600"
              }`}
            >
              Google App
            </button>
            <button
              type="button"
              name='application'
              onClick={() => {
                handleButtonClick('https://apps.apple.com/us/app/example/id1234567890');
                handleClickAppStore();
              }}
              className={`w-full md:w-auto px-9 py-2 border rounded font-sans text-xs ${
                isClickedAppStore ? "bg-blue-500 text-white" : "bg-white text-gray-600"
              }`}
            >
              App Store
            </button>
            {validationErrorspromotionobject.application && <p className="text-red-500 text-xs mt-1 ml-5">{validationErrorspromotionobject.application}</p>}
         
          </div>
         
        </div>

        <div className="flex flex-col md:flex-row md:items-center md:space-x-6 mt-8 ml-10">
          <label className="block text-gray-700 md:w-1/4 font-sans text-sm">Preview Url*</label>
          <div className="w-full">
          <input
            type="text"
            name="preview_url"
    
            onChange={(e) => setPreviewUrl(e.target.value)} // This allows the user to change the input value manually
            placeholder={previewUrl || "Enter Url....."} 
            className="mt-2 md:mt-0 ml-[7%] md:w-[47%] py-1 border border-gray-300 rounded text-gray-500 font-xs placeholder-gray-400 placeholder:text-xs placeholder:pl-2 text-xs"
            />
          </div>
        </div>

        <div className="flex md:flex-row md:items-center md:space-x-6 mt-8 ml-9">
          <label className="flex text-gray-700 md:w-1/4 font-sans text-sm ml-1">Currency*</label>
          <div className="w-full md:w-[35%] flex">
            <select name="currency" className="mt-2 md:mt-0 w-full md:w-1/2 py-2 border border-gray-300 rounded text-gray-600 bg-blue-500 text-white px-1 text-xs">
              <option value="USD" className="text-gray-600 font-sans text-xs bg-white pr-1 py-2">USD</option>
              <option value="INR" className="text-gray-600 font-sans text-xs bg-white pr-1 py-2">INR</option>
            </select>
          </div>
        </div>

        <div className="flex md:flex-row md:items-center md:space-x-6 mt-8 ml-9">
          <label className="text-gray-700 md:w-1/4 font-sans text-sm ml-1">Status*</label>
          <div className="w-full md:w-[35%] flex">
            <select name="status" className="mt-2 md:mt-0 w-full md:w-1/2 py-2 border border-gray-300 rounded text-gray-600 bg-blue-500 text-white px-1 pr-1 text-xs">
              <option value="Pending" className="text-gray-600 font-sans text-xs bg-white pr-1 py-2">Pending</option>
              {/* <option value="Processing" className="text-gray-600 font-sans text-xs bg-white pr-1 py-2">Processing</option> */}
            </select>
          </div>
        </div>

        <div className="flex justify-end mt-4">
          <button type="submit" className="hover:bg-blue-500 hover:text-white px-4 py-2 rounded-lg font-xs font-sans text-sm text-gray-600 border border-gray-300">Save & Next</button>
        </div>
      </div>
     
    </form>
   </div>
   {/* Placement form*/}
   <form onSubmit={handleSubmitplacement}>
      <div className="w-full mx-auto mt-4 bg-white p-12 rounded-lg border border-gray-100 shadow">
        <h1 className="mb-6 text-gray-700 font-semibold font-sans text-sm">Placement</h1>

        <div className="pb-6">
          <div className="flex md:flex-row">
            <div className="w-max md:w-1/3 font-xs text-sm text-gray-600 ml-10">Select Placement</div>
            <div className="w-full md:w-2/3 flex text-sm">
              {placements.map(({ value, label }) => (
                <div className="font-xs text-sm text-gray-600 space-x-2 text-sm mr-2" key={value}>
                  <input
                    type="radio"
                    id={value}
                    name="placement"
                    value={value}
                    checked={formDataplacement.placement === value}
                    onChange={() => handleRadioChange(value)}
                  />
                  <label
                    htmlFor={value}
                    className="cursor-pointer text-sm"
                    onClick={() => handleRadioChange(value)}
                  >
                    {label}
                  </label>
                </div>
              ))}
                {validationErrorsplacement. placement && <p className="text-red-500 text-xs mt-1 ml-5">{validationErrorsplacement. placement}</p>}
            </div>
          
          </div>

          <div className="pt-2 flex justify-left items-center font-xs text-sm text-gray-600 ml-[36%]">
            {placements.map(({ value }) => (
              <div
                key={value}
                className={`mt-2 ${expandedSection === value ? 'block' : 'hidden'}`}
              >
                {value === 'OEM' && (
                  <div className="flex space-x-2">
                    <div className="">
                      <input
                        type="radio"
                        id="oem1"
                        name="subPlacement"
                        value="Xiaomi"
                        checked={formDataplacement.subPlacement === 'Xiaomi'}
                        onChange={() => handleSubPlacementChange('Xiaomi')}
                      />
                      <label htmlFor="oem1" className="pb-1 mr-1">Xiaomi</label>
                    </div>
                    <div className="">
                      <input
                        type="radio"
                        id="oem2"
                        name="subPlacement"
                        value="Oppo"
                        checked={formDataplacement.subPlacement === 'Oppo'}
                        onChange={() => handleSubPlacementChange('Oppo')}
                      />
                      <label htmlFor="oem2" className="mr-1">Oppo (Only MMP)</label>
                    </div>
                    <div className="">
                      <input
                        type="radio"
                        id="oem3"
                        name="subPlacement"
                        value="Vivo"
                        checked={formDataplacement.subPlacement === 'Vivo'}
                        onChange={() => handleSubPlacementChange('Vivo')}
                      />
                      <label htmlFor="oem3" className="mr-1">Vivo</label>
                    </div>
                  </div>
                )}
                {value === 'DeveloperTraffic' && (
                  <div className="">
                    <input
                      type="radio"
                      id="dev1"
                      name="subPlacement"
                      value="Xiaomi Developer Traffic"
                      checked={formDataplacement.subPlacement === 'Xiaomi Developer Traffic'}
                      onChange={() => handleSubPlacementChange('Xiaomi Developer Traffic')}
                    />
                    <label htmlFor="dev1" className="mr-2">Xiaomi Developer Traffic</label>
                  </div>
                )}
                {value === 'InApp' && (
                  <div className="flex">
                    <div className="">
                      <input
                        type="radio"
                        id="inapp1"
                        name="subPlacement"
                        value="Inmobi RTB"
                        checked={formDataplacement.subPlacement === 'Inmobi RTB'}
                        onChange={() => handleSubPlacementChange('Inmobi RTB')}
                      />
                      <label htmlFor="inapp1" className="mr-2">Inmobi RTB</label>
                    </div>
                    <div className="">
                      <input
                        type="radio"
                        id="inapp2"
                        name="subPlacement"
                        value="Smatoo RTB"
                        checked={formDataplacement.subPlacement === 'Smatoo RTB'}
                        onChange={() => handleSubPlacementChange('Smatoo RTB')}
                      />
                      <label htmlFor="inapp2" className="mr-2">Smatoo RTB</label>
                    </div>
                    <div className="">
                      <input
                        type="radio"
                        id="inapp3"
                        name="subPlacement"
                        value="Xiaomi RTB"
                        checked={formDataplacement.subPlacement === 'Xiaomi RTB'}
                        onChange={() => handleSubPlacementChange('Xiaomi RTB')}
                      />
                      <label htmlFor="inapp3" className="mr-2">Xiaomi RTB</label>
                    </div>
                    <div className="">
                      <input
                        type="radio"
                        id="inapp4"
                        name="subPlacement"
                        value="Shareit RTB"
                        checked={formDataplacement.subPlacement === 'Shareit RTB'}
                        onChange={() => handleSubPlacementChange('Shareit RTB')}
                      />
                      <label htmlFor="inapp4" className="mr-2">Shareit RTB</label>
                    </div>
                  </div>
                )}
                {value === 'PremiumInventory' && (
                  <div className="flex justify-center items-center">
                    <div className="">
                      <input
                        type="radio"
                        id="premium1"
                        name="subPlacement"
                        value="FaceMoji"
                        checked={formDataplacement.subPlacement === 'FaceMoji'}
                        onChange={() => handleSubPlacementChange('FaceMoji')}
                      />
                      <label htmlFor="premium1" className="mr-2">FaceMoji</label>
                    </div>
                    <div className="">
                      <input
                        type="radio"
                        id="premium2"
                        name="subPlacement"
                        value="KeywordsApps"
                        checked={formDataplacement.subPlacement === 'KeywordsApps'}
                        onChange={() => handleSubPlacementChange('KeywordsApps')}
                      />
                      <label htmlFor="premium2" className="mr-2">Keywords Apps</label>
                    </div>
                    <div className="">
                      <input
                        type="radio"
                        id="premium3"
                        name="subPlacement"
                        value="Shareme"
                        checked={formDataplacement.subPlacement === 'Shareme'}
                        onChange={() => handleSubPlacementChange('Shareme')}
                      />
                      <label htmlFor="premium3" className="mr-2">Shareme</label>
                    </div>
                    <div className="">
                      <input
                        type="radio"
                        id="premium4"
                        name="subPlacement"
                        value="Xender"
                        checked={formDataplacement.subPlacement === 'Xender'}
                        onChange={() => handleSubPlacementChange('Xender')}
                      />
                      <label htmlFor="premium4" className="mr-2">Xender</label>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        <div className="flex justify-end mt-4">
        <button
      onClick={handleClickpromotionobject}
      className={`px-4 py-2 rounded-lg font-xs text-sm ${isClickedpromotionobject ? 'bg-blue-500 text-white' : 'bg-white text-gray-600'} border`}
    >
      save & next
    </button>

        </div>
      </div>
    </form>
   </div>
   {/*  dropdown form */}


   <div className="w-full mx-auto mt-4 bg-white p-12 rounded-lg border border-gray-100 shadow">
      <h1 className="mb-6 text-gray-700 font-semibold font-sans text-sm">Targeting in details</h1>
      <div className="flex flex-col space-y-6 ml-6">


        <div className="p-4 pt-5 w-[60%]">
          <div className="w-full border rounded shadow-lg border border-gray-300">
            <div className="p-7 border-b flex justify-between items-center">
              <p className="w-1/4 mr-4 text-gray-700 font-sans text-sm font-xs">countryData/Regions</p>
              <div className="relative w-3/4">
                <input
                  type="text"
                  name='regions'
                  placeholder="search..."
                  value={searchTermFirstSection}
                  onChange={(e) => setSearchTermFirstSection(e.target.value)}
                  className="w-full pl-10 p-2 border rounded-full focus:outline-none text-gray-700 font-sans text-sm font-xs"
                />
                <HiMagnifyingGlass className="absolute right-3 top-2.5 text-gray-400" />
              </div>
            </div>
               <div className="max-h-48 overflow-y-auto">
               {filtercountryData(allCountries, searchTermFirstSection).map((country, index) => (
               <div
               key={index}
               className="flex items-center p-2 border-b hover:bg-gray-100 cursor-pointer text-gray-700 font-sans text-sm font-xs"
                onClick={() => toggleOption(country, 'first')}
                  >
                <input
                 type="checkbox"
                 checked={countries.includes(country)} // Dynamically set the checked state
                  onChange={() => toggleOption(country, 'first')} // Handle selection logic here
                  className="mr-2 rounded font-sans text-sm font-xs"
                   />
                  <span>{country}</span>
                   </div>
                   ))}
                    </div>
                    </div>
                   </div>
        {/* Language section */}
        <div className='w-[40%] flex items-center ml-[3%] mt-8'>
          <div className='text-gray-700 font-sans text-sm font-xs'>Language</div>
          <div className={`${getButtonStyles(isLanguageAllActive)} ml-[35%]  rounded`}>
            <button className='font-sans text-sm font-xs p-2 pl-9 pr-9' onClick={handleLanguageAllClick}>All</button>
          </div>
          <div className={`${getButtonStyles(isLimitedActive)}  ml-5 rounded`}>
            <button className='font-sans text-sm font-xs p-2 pl-8 pr-8' onClick={handleLimitedClick}>Limited</button>
          </div>
        </div>

        {/* Language checkboxes */}
        {showLanguageCheckboxes && (
          <div className="p-4 w-[60%] mt-8">
            <div className="w-full border border-gray-300 rounded shadow border border-gray-100">
              <div className="p-6 border-b flex justify-center items-center">
                <div className="relative w-3/4">
                  <input
                    type="text"
                    placeholder="search..."
                    name='languageData'
                    value={searchTermSecondSection}
                    onChange={(e) => setSearchTermSecondSection(e.target.value)}
                    className="w-full pl-10 py-2 px-4 border rounded-full focus:outline-none text-gray-700"
                  />
                  <HiMagnifyingGlass className="absolute right-3 top-2.5 text-gray-400" />
                </div>
              </div>
              <div className="max-h-48 overflow-y-auto">
                {filtercountryData(languageData, searchTermSecondSection).map((country, index) => (
                  <div
                    key={index}
                    className="flex items-center px-4 py-2 border-b hover:bg-gray-100 cursor-pointer text-gray-700 font-sans text-sm font-xs"
                    onClick={() => toggleOption(country, 'second')}
                  >
                    <input
                      type="checkbox"
                      checked={languages.includes(country)}
                      readOnly
                      className="mr-2 rounded"
                    />
                    <span>{country}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Interest Tag section */}
        <div className='w-full flex items-center ml-7 mt-8'>
          <div className='text-gray-700 font-sans text-sm font-xs'>Interest Tag</div>
          <div className={`${getButtonStyles(isInterestAllActive)} ml-[13%] rounded`}>
            <button className='font-sans text-sm font-xs p-2 pl-9 pr-9' onClick={handleInterestAllClick}>All</button>
          </div>
          <div className={`${getButtonStyles(isLimitedActiveIntrest)} ml-5 rounded`}>
            <button className='font-sans text-sm font-xs p-2 pl-8 pr-8' onClick={handleLimitedClickInterest}>Limited</button>
          </div>
        </div>

       {/* Interest Checkboxes */}
{showInterestCheckboxes && (
  <div className="p-4 w-[60%] mt-8">
    <div className="w-full border rounded shadow border border-gray-300">
      
      <div className="max-h-48 overflow-y-auto">
        {intrestTagData.map((tag, index) => (
          <div
            key={index}
            className="flex items-center px-4 py-2 border-b hover:bg-gray-100 cursor-pointer text-gray-700 font-sans text-sm font-xs"
            onClick={() => toggleOption(tag, 'interest')}
          >
            <input
              type="checkbox"
              name='intrestTagData'
              checked={interest_tags.includes(tag)}
              readOnly
              className="mr-2 rounded"
            />
            <span>{tag}</span>
          </div>
        ))}
      </div>
    </div>
  </div>
)}
      </div>
        {/* Age group  */}
        <div>
      <form onSubmit={handleSubmitDropDown}>
        <div className='w-full flex items-center ml-7 mt-8'>
          <div className='text-gray-700 font-sans text-sm font-xs ml-5'>Age Group</div>
          <div className={`ml-[14%] rounded ${buttonStylesage(!isLimitedActiveage)}`}>
            <button
              type="button"
              className='font-sans text-sm font-xs p-2 pl-9 pr-9'
              onClick={handleAllClickage}
            >
              All
            </button>
          </div>
          <div className={`ml-5 rounded ${buttonStylesage(isLimitedActiveage)}`}>
            <button
              type="button"
              className='font-sans text-sm font-xs p-2 pl-8 pr-8'
              onClick={handleLimitedClickage}
            >
              Limited
            </button>
          </div>
        </div>

        {isLimitedActiveage && (
          <div className='flex space-x-4 ml-[25%] mt-3'>
            <div className='w-max'>
              <input
                type="checkbox"
                name='age'
                id="3-16"
                checked={age['3-16']}
                onChange={handleCheckboxChangeDropDown}
              />
              <label htmlFor="3-16" className='text-gray-600'>3-16</label>
            </div>
            <div>
              <input
                type="checkbox"
                name='age'
                id="17-40"
                checked={age['17-40']}
                onChange={handleCheckboxChangeDropDown}
              />
              <label htmlFor="17-40" className='text-gray-600'>17-40</label>
            </div>
            <div>
              <input
                type="checkbox"
                name='age'
                id="41-60"
                checked={age['41-60']}
                onChange={handleCheckboxChangeDropDown}
              />
              <label htmlFor="41-60" className='text-gray-600'>41-60</label>
            </div>
            <div>
              <input
                type="checkbox"
                name='age '
                id="60+"
                checked={age['60+']}
                onChange={handleCheckboxChangeDropDown}
              />
              <label htmlFor="60+" className='text-gray-500'>60+</label>
            </div>
          </div>
        )}

          <div className="flex justify-end mt-4">
          <button
      onClick={handleClickdropdown}
      className={`px-4 py-2 rounded-lg font-xs text-sm  ${isClickeddropdown ? 'bg-blue-500 text-white' : 'bg-white text-gray-600'} border`}
    >
      save & next
    </button>
        </div>
      </form>
    </div>
   
    </div>
   </div>
      



       {/* machine target form */}
   
       <form onSubmit={handleFormSubmitmachine}>
      <div className="w-full mx-auto mt-4 bg-white p-12 rounded-lg border border-gray-100 shadow">
        <h1 className="text-lg mb-6 text-gray-700 font-semibold font-sans text-sm">Machine Target</h1>

        {/* Network Section */}
        <div className="flex items-center w-full ml-7 mt-8">
          <div className="text-gray-700 font-sans text-sm ml-8">Network</div>
          <div className="flex space-x-4 ml-[16%]">
            <button
              type="button"
              onClick={() => {
                setShowCheckboxes(false);
                setShowScrollOptions(false);
              }}
              className={`border rounded text-gray-600 ${!showCheckboxes ? 'bg-blue-500 text-white' : 'bg-white'} p-2 pl-10 pr-10 font-sans text-sm border border-gray-300`}
            >
              All
            </button>
            <button
              type="button"
              onClick={() => {
                setShowCheckboxes(!showCheckboxes);
                setShowScrollOptions(false);
              }}
              className={`rounded text-gray-600 ${showCheckboxes ? 'bg-blue-500 text-white' : 'bg-white'} p-2 pl-7 pr-7 font-sans text-sm border border-gray-300`}
            >
              Limited
            </button>
          </div>
        </div>

        {/* Check Box Section */}
        {showCheckboxes && (
          <div className="w-full flex items-center ml-[23%] mt-8">
            <div className="flex items-center flex-wrap md:w-1/2 space-x-4 mt-2 md:mt-0 pl-4">
              {['2 G', '3 G', '4 G', 'WIFI'].map((ageGroup) => (
                <div key={ageGroup} className="flex items-center mb-2 md:mb-0 ml-5">
                  <input
                    type="checkbox"
                    id={`age-group-${ageGroup}`}
                    name="age"
                    value={ageGroup}
                    checked={selectedNetworkOption === ageGroup}
                    onChange={() => handleNetworkCheckboxChange(ageGroup)}
                    className="mr-3"
                  />
                  <label htmlFor={`age-group-${ageGroup}`} className="text-gray-700 font-sans text-sm font-xs">
                    {ageGroup}
                  </label>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* OS Section */}
        <div className="flex items-center w-full ml-7 mt-10">
          <div className="text-gray-700 font-sans text-sm ml-9">OS</div>
          <div className="flex space-x-4 ml-[19%]">
            <button
              type="button"
              onClick={() => handleOSButtonClick('Android')}
              className={`rounded p-2 pl-6 pr-6 ${osType === 'Android' ? 'bg-blue-500 text-white' : 'bg-white'} text-gray-600 font-xs text-sm border border-gray-300`}
            >
              Android
            </button>
            <button
              type="button"
              onClick={() => handleOSButtonClick('IOS')}
              className={`rounded text-gray-600 ${osType === 'IOS' ? 'bg-blue-500 text-white' : 'bg-white'} p-1 pl-9 pr-9 font-xs text-sm border border-gray-300`}
            >
              IOS
            </button>
          </div>
        </div>

        {/* Scrolling Section */}
        {showScrollOptions && (
          <div className="p-4 w-[60%] mt-8 mx-auto ml-14">
            <div className="w-full border rounded shadow">
              <div className="p-2 border-b flex justify-center items-center">
                <p className="text-gray-600 font-sans text-sm font-xs p-4">Selection Of version is optional</p>
              </div>
              <div className="max-h-48 overflow-y-auto">
                {options[osType]?.map((option, index) => (
                  <div
                    key={index}
                    className="flex items-center px-4 py-2 hover:bg-gray-100 cursor-pointer text-gray-600 font-sans text-sm"
                    onClick={() => handleScrollCheckboxChange(option)}
                  >
                    <input
                      type="checkbox"
                      name='os'
                      checked={selectedScrollOption.includes(option)}
                      readOnly
                      className="mr-2 rounded"
                    />
                    <span>{option}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Devices Section */}
        <div className="flex flex-col md:flex-row md:items-start md:space-x-4 mt-10 ml-[5%] w-full">
          <label className="text-gray-700 font-sans text-sm font-xs md:w-1/4">Devices</label>
          <div className="flex flex-wrap space-x-3 w-full">
            {['All', 'Mobile', 'Tablet', 'Desktop'].map((deviceType) => (
              <div key={deviceType} className="flex items-center mb-2">
                <input
                  type="checkbox"
                  id={deviceType}
                  name="devices"
                  value={deviceType}
                  checked={selectedOSOption.includes(deviceType)}
                  onChange={() => handleOSCheckboxChange(deviceType)}
                  className="mr-3"
                />
                <label htmlFor={deviceType} className="text-gray-700 font-sans text-sm font-xs">
                  {deviceType}
                </label>
              </div>
            ))}
          </div>
        </div>

        {/* Submit Button */}
        <div className="flex justify-end mt-4">
        <button
      onClick={handleClickmachinetarget}
      className={`px-4 py-2 rounded rounded-lg font-xs text-sm ${isClickedmachinetarget ? 'bg-blue-500 text-white' : 'bg-white text-gray-600'} border`}
    >
      save & next
    </button>
        </div>
      </div>
    </form>
   </div>

 {/* Budget Schedul form */}
   
 <form onSubmit={handleSubmitbudgetschedule}>
      <div className="w-full mx-auto mt-4 bg-white p-8 rounded-lg border border-gray-100 shadow">
        <h1 className="mb-6 font-semibold font-sans text-sm text-gray-700 ml-6">Budget & Schedule</h1>
        <div className="space-y-7 ml-20">

          <div className="flex items-center">
            <label className="text-gray-700 font-sans text-sm">Time Zone</label>
            <select
              name="timezones"
              className="ml-[19%] mt-2 py-2 border border-gray-300 rounded text-gray-600 bg-blue-500 text-white px-4 text-xs"
            >
              <option className="text-white w-[80%] font-sans text-xs bg-white">Midway</option>
              {/* Add more options as needed */}
            </select>
          </div>

          <div className="flex items-center w-full">
            <label className="text-gray-700 font-sans text-sm">Time</label>
            <div className="flex space-x-3 w-2/3 ml-[23%]">
              <input
                type="date"
                name="start_date"
                className="border border-gray-300 rounded text-gray-600 font-sans text-sm"
              />
              <span className="flex items-center text-gray-600 font-sans text-sm">---</span>
              <input
                type="date"
                name="end_date"
                className="border border-gray-300 rounded text-gray-600 font-sans text-sm text-gray-600"
              />
            </div>
          </div>

          <div className="flex items-center">
            <label className="text-gray-700 font-sans text-sm w-[18%]">Daily Budget</label>
            <div className="flex space-x-4 w-full ml-32">
              <button
                type="button"
                onClick={() => setIsDailyBudgetLimited(false)}
                className={`px-3 py-2 border border-gray-300 rounded font-sans text-sm ${!isDailyBudgetLimited ? 'bg-blue-500 text-white' : 'bg-white text-gray-600'}`}
              >
                Unlimited
              </button>
              <button
                type="button"
                onClick={toggleDailyBudgetVisibility}
                className={`px-3 py-2 border border-gray-300 rounded font-sans text-sm ${isDailyBudgetLimited ? 'bg-blue-500 text-white' : 'bg-white text-gray-600'}`}
              >
                Limited
              </button>
            </div>
          </div>

          {isDailyBudgetLimited && (
            <div className="items-center">
              <input
                type="number"
                name="daily_budget_amount"
                value={daily_budget_amount}
                onChange={(e) => setDailyBudget(e.target.value)}
                placeholder="Enter Amount In (USD)..."
                className="w-[30%] p-1 border border-gray-300 rounded text-gray-500 ml-[26%] font-sans text-sm placeholder-gray-400 placeholder:text-xs placeholder:pl-2"
              />
            </div>
          )}

          <div className="flex items-center">
            <label className="text-gray-700 font-sans text-sm w-[18%]">Total Budget</label>
            <div className="flex space-x-4 w-full ml-32">
              <button
                type="button"
                onClick={() => setIsTotalBudgetLimited(false)}
                className={`px-3 py-2 border border-gray-300 rounded font-sans text-sm ${!isTotalBudgetLimited ? 'bg-blue-500 text-white' : 'bg-white text-gray-600'}`}
              >
                Unlimited
              </button>
              <button
                type="button"
                onClick={toggleTotalBudgetVisibility}
                className={`px-3 py-2 border border-gray-300 rounded font-sans text-sm ${isTotalBudgetLimited ? 'bg-blue-500 text-white' : 'bg-white text-gray-600'}`}
              >
                Limited
              </button>
            </div>
          </div>

          {isTotalBudgetLimited && (
            <div className="items-center">
              <input
                type="number"
                name=" total_budget_amount"
                value={total_budget_amount}
                onChange={(e) => setTotalBudget(e.target.value)}
                placeholder="Enter Amount In (USD)..."
                className="w-[30%] p-1 border border-gray-300 rounded text-gray-600 ml-[26%] font-sans text-sm placeholder-gray-400 placeholder:text-xs placeholder:pl-2"
              />
            </div>
          )}

        </div>

        {/* Submit Button */}
        <div className="flex justify-end mt-4">
        <button
      onClick={handleClickBudgetSchedule}
      className={`px-4 py-2 rounded rounded-lg font-xs text-sm  ${isClickedBudgetSchedule ? 'bg-blue-500 text-white' : 'bg-white text-gray-600'} border`}
    >
      save & next
    </button>

        </div>
      </div>
    </form>
    </div>

    {/* pay out form */}
    <form onSubmit={handleSubmitpayout} className="flex flex-col w-full mt-4 bg-white p-8 rounded-lg border border-gray-100 shadow mb-4">
      <h1 className="mb-6 text-gray-600 font-semibold text-sm ml-6">Pay Out</h1>
      
      <div className="flex flex-col space-y-4 ml-8 mr-6">
        <div className="flex items-center text-gray-700">
          <span className="text-gray-600 font-sans text-sm">Bid</span>
          <input
            type="number"
            value={total_budget_payout}
            onChange={(e) => setUsdBid(e.target.value)}
            placeholder="00.00"
            className="w-1/2 p-1 border border-gray-300 rounded text-gray-700 ml-5"
          />
          <div className="text-gray-600 font-sans text-sm ml-3">USD</div>
        </div>

        <div className="flex items-center text-gray-700">
          <span className="text-gray-600 font-sans text-sm">CAC</span>
          <input
            type="number"
            value={cac}
            onChange={(e) => setCadBid(e.target.value)}
            placeholder="00.00"
            className="w-1/2 p-1 border border-gray-300 rounded text-gray-700 ml-3"
          />
          <div className="text-gray-600 font-sans text-sm ml-3">USD</div>
        </div>
      </div>

      {/* Submit Button */}
      <div className="flex justify-end mt-4">
      <button
      onClick={handleClickpayout}
      className={`px-4 py-2 rounded rounded-lg font-xs text-sm ${isClickedpayout ? 'bg-blue-500 text-white' : 'bg-white text-gray-600'} border`}
    >
      save & next
    </button>

      </div>
    </form>

      {/* creative_optional form */}
    
      <form onSubmit={handleSubmitcreative_optional} className="w-full mx-auto bg-white p-12 rounded-lg border border-gray-100 shadow">
      <h1 className="text-lg mb-6 text-gray-700 font-semibold font-sans text-sm">creative</h1>
      <div className="flex flex-col space-y-4 ml-8">
        <div className="flex items-center text-gray-700 w-[80%]">
          <span className="w-1/3 text-gray-700 font-xs font-sans text-sm">Campaign Name</span>
          <input
            type="text"
            value={campaignName}
            onChange={(e) => setCampaignName(e.target.value)}
            placeholder="Enter campaign name..."
            className="w-1/2 p-1 border border-gray-300 rounded text-gray-600 placeholder-gray-400 placeholder:text-xs placeholder:pl-3 placeholder:pt-8"
          />
        </div>

        <div className="flex items-center text-gray-700 w-[80%]">
          <span className="w-1/3 text-gray-700 font-xs font-sans text-sm">Targeting Name</span>
          <input
            type="text"
            value={targetingName}
            onChange={(e) => setTargetingName(e.target.value)}
            placeholder="Enter targeting name..."
            className="w-1/2 p-1 border border-gray-300 rounded text-gray-600 placeholder-gray-400 placeholder:text-xs placeholder:pl-3"
          />
        </div>

        <div className="flex items-center text-gray-700 w-[80%]">
          <span className="w-1/3 text-gray-700 font-xs font-sans text-sm">creative Name</span>
          <input
            type="text"
            value={creative_optionalName}
            onChange={(e) => setcreative_optionalName(e.target.value)}
            placeholder="Enter creative_optional name..."
            className="w-1/2 p-1 border border-gray-300 rounded text-gray-600 placeholder-gray-400 placeholder:text-xs placeholder:pl-3"
          />
        </div>
      </div>

      {/* Submit Button */}
      <div className="flex justify-end mt-4">
      <button
      onClick={handleClickcreative_optional}
      className={`px-4 py-2 rounded rounded-lg  font-xs text-sm ${isClickedcreative_optional ? 'bg-blue-500 text-white' : 'bg-white text-gray-600'} border`}
    >
      save & next
    </button>

      </div>
    </form>
    </div>
     {/* Thumbnail form*/}
    <div className="w-full mx-auto mt-3 p-8 bg-white rounded-lg border border-gray-100 shadow font-sans">
      <h1 className="mb-6 text-gray-700 font-semibold font-sans text-sm ml-4">Thumbnail</h1>
      <form onSubmit={handleSubmitThambnail} className="space-y-8 ml-[5%]">
        
       
        <div className="flex items-center mt-8">
          <label className="block mb-2 w-1/4 text-gray-700 font-xs font-sans text-sm">
            Thumbnail <span className="text-red-500">*</span>
          </label>
          
          <div className="flex items-center w-1/2 ml-1">
            <input
              type="file"
              name="thumbnail"
              onChange={handleFileChange}
              className="hidden text-gray-500"
              id="thumbnail-upload"
            />
            <div className="border border-gray-200">
              <label
                htmlFor="thumbnail-upload"
                className={`px-4 py-2 rounded-l cursor-pointer font-xs font-sans text-sm  border border-gray-300 ${
                  formDataThambnail.thumbnail ? 'bg-white text-gray-600' : 'bg-white text-gray-600'
                }`}
              >
                Choose files
              </label>
              <input
                type="file"
                id="upload"
                className="hidden"
                onChange={handleFileChange}
              />
            </div>
            <div className="border border-gray-300 w-2/3  p-1 rounded-r ">
              <span className="text-gray-500 font-xs font-sans text-sm px-4 py-1">
                {formDataThambnail.thumbnail ? formDataThambnail.thumbnail.name : 'No File Chosen...'}  
              </span>
            </div>
          </div>
        </div>

        {/* creative_optional (Optional) */}
        <div className="flex mt-8 w-full">
      <label className="font-xs font-sans text-sm mb-2 text-gray-600">creative_optional (Optional)</label>
      <div className="flex items-center w-full mb-2 ml-[13%]">
      <input
       type="file"
       name="creative_optional"
      onChange={handleFileChangeButton}
      className="hidden"
      id="creative_optional-upload"
      multiple
       />

        <div className="flex items-center w-full">
          <label
            htmlFor="creative_optional-upload"
            className="px-4 pt-2 pb-1 bg-white text-gray-600 rounded-l cursor-pointer font-xs text-sm border border-gray-300"
          >
            Choose files
          </label>
          <div className="border border-gray-300 w-1/2 px-4 py-1 rounded-r">
            <span className="text-gray-500 font-xs font-sans text-sm">
              {selectedFiles.length > 0
                ? selectedFiles[selectedFiles.length - 1].name
                : 'No Files Chosen...'}
            </span>
          </div>
          <button
            type="button"
            onClick={handleButtonClickthambnail}
            className={`px-3 py-1 rounded ml-2 border border-gray-300 ${
              isButtonClicked ? 'bg-blue-500 text-white' : 'bg-white text-gray-600'
            }`}
          >
            +
          </button>
        </div>
      </div>
    </div>
 <div className="  ml-[25%] flex">
 {selectedFiles.length > 0 && (
 <div className="flex space-x-3">
 {selectedFiles.map((file, index) => (
 <div key={index} className="flex items-center py-1 text-gray-400 text-sm font-xs ">
 <span>{file.name}</span>
 <button
 type="button"
 onClick={() => handleFileDelete(index)}
 className="text-gray-600 text-lg ml-2"
 >
 <GoX />
 </button>
 </div>
 ))}
 </div>
 )}
 </div>

        {/* Visibility */}
        <div className="flex items-center mt-8">
          <label className="block w-1/4 text-gray-700 font-xs font-sans text-sm">Visibility</label>
          <div className="flex items-center space-x-4 w-3/4">
            <input
              type="checkbox"
              name="visibility"
              checked={formDataThambnail.visibility}
              onChange={handleInputChangeThambnail}
              className="form-checkbox h-3 w-4 text-blue-600"
            />
            <span className="ml-2 text-gray-700 font-xs font-sans text-sm">Private</span>
          </div>
        </div>

        {/* Ad Title */}
        <div className="flex items-center mt-8">
          <label className="mb-2 w-1/4 text-gray-700 font-xs font-sans text-sm">Ad Title</label>
          <input
            type="text"
            name="ad_title"
            value={formDataThambnail. ad_title}
            onChange={handleInputChangeThambnail}
            placeholder="Ad Title..."
            className="w-1/2 p-1 border border-gray-300 rounded placeholder-gray-400 placeholder:text-xs text-gray-600 text-sm font-xs"
          />
        </div>

        {/* Ad Description */}
        <div className="flex items-center mt-8">
          <label className="block mb-2 w-1/4 text-gray-600 font-xs font-sans text-sm">Ad Description</label>
          <input
            type="text"
            name="ad_description"
            value={formDataThambnail. ad_description}
            onChange={handleInputChangeThambnail}
            placeholder="Ad Description..."
            className="w-1/2 p-1 border border-gray-300 rounded placeholder-gray-400 placeholder:text-xs text-sm font-xs text-gray-600"
          />
        </div>

        {/* KPI */}
        <div className="flex items-center mt-8">
          <label className="block mb-2 w-1/4 text-gray-600 font-xs font-sans text-sm">KPI</label>
          <textarea
            name="kpi"
            value={formDataThambnail.kpi}
            onChange={handleInputChangeThambnail}
            placeholder="Enter KPI..."
            className="w-1/2 p-1 border border-gray-200 h-40 rounded-br-lg text-gray-600 font-xs font-sans text-sm placeholder:text-sm placeholder:font-xs placeholder:text-500 "
          ></textarea>
        </div>

        {/* Event Screenshot */}
        <div className="flex items-center mt-8">
          <label className="block mb-2 w-1/4 text-gray-600 font-xs font-sans text-sm">Event Screenshot</label>
          <div className="flex flex-col space-y-2 w-3/4">
            <div className="flex space-x-4">
              <button
                type="button"
                className={getButtonStylesThambnail(activeEventButton === 'image')}
                onClick={handleEventScreenshotClick}
              >
                Image format
              </button>
              <button
                type="button"
                className={getButtonStylesThambnail(activeEventButton === 'url')}
                onClick={handleEventScreenshotURLClick}
              >
                URL format
              </button>
            </div>

            {/* Image Format Input */}
            {showEventScreenshot && (
              <div className="flex items-center">
                <input
                  type="file"
                  name="event_screenshot_image_format"
                  onChange={handleFileChange}
                  className="hidden"
                  id="event-screenshot-upload"
                />
                <div className="border border-gray-200">
                  <label
                    htmlFor="event-screenshot-upload"
                    className="px-4 py-2 bg-white text-gray-600 rounded-l cursor-pointer font-xs font-sans text-sm border border-gray-300"
                  >
                    Choose files
                  </label>
                </div>
                <div className="border border-gray-300 w-2/3 px-4 py-1 rounded-r">
                  <span className="text-gray-500 font-xs font-sans text-sm">
                    {formDataThambnail.event_screenshot_image_format ? formDataThambnail.event_screenshot_image_format.name : 'No File Chosen...'}
                  </span>
                </div>
              </div>
            )}

            {/* URL Format Input */}
            {showEventScreenshotURL && (
              <input
                type="text"
                name="eventScreenshotURL"
                value={formDataThambnail.event_screenshot_url_format}
                onChange={handleInputChangeThambnail}
                placeholder="Enter URL"
                className="w-1/2 p-1 border border-gray-300 rounded placeholder-gray-400 placeholder:text-xs"
              />
            )}
          </div>
        </div>

        {/* MMP Screenshot */}
        <div className="flex items-center mt-8">
          <label className="block mb-2 w-1/4 text-gray-600 font-xs font-sans text-sm">MMP Screenshot</label>
          <div className="flex flex-col space-y-2 w-3/4">
            <div className="flex space-x-4">
              <button
                type="button"
                className={getButtonStylesThambnail(activeMmpButton === 'image')}
                onClick={handleMmpScreenshotClick}
              >
                Image format
              </button>
              <button
                type="button"
                className={getButtonStylesThambnail(activeMmpButton === 'url')}
                onClick={handleMmpScreenshotURLClick}
              >
                URL format
              </button>
            </div>

            {/* Image Format Input */}
            {showMmpScreenshot && (
              <div className="flex items-center">
                <input
                  type="file"
                  name="mmp_activation_image_format"
                  onChange={handleFileChange}
                  className="hidden"
                  id="mmp-screenshot-upload"
                />
                <div className="border border-gray-200">
                  <label
                    htmlFor="mmp-screenshot-upload"
                    className="px-4 py-2 bg-white text-gray-600 rounded-l cursor-pointer font-xs font-sans text-sm border border-gray-300"
                  >
                    Choose files
                  </label>
                </div>
                <div className="border border-gray-300 w-2/3 px-4 p-1 rounded-r">
                  <span className="text-gray-500 font-xs font-sans text-sm">
                    {formDataThambnail.mmp_activation_image_format ? formDataThambnail.mmp_activation_image_format.name : 'No File Chosen...'}
                  </span>
                </div>
              </div>
            )}

            {/* URL Format Input */}
            {showMmpScreenshotURL && (
              <input
                type="text"
                name="mmpScreenshotURL"
                value={formDataThambnail.mmp_activation_url_format}
                onChange={handleInputChangeThambnail}
                placeholder="Enter URL"
                className="w-1/2 p-1 border border-gray-300 rounded placeholder-gray-400 placeholder:text-xs"
              />
            )}
          </div>
        </div>

        {/* Campaign Description */}
        <div className="flex items-center mt-8">
          <label className="block mb-2 w-1/4 text-gray-600 font-xs font-sans text-sm">Campaign Description</label>
          <textarea
            name=" campaign_description"
            value={formDataThambnail. campaign_description}
            onChange={handleInputChangeThambnail}
            placeholder="Campaign Description..."
            className="w-1/2 p-1 border border-gray-200 h-40 rounded-br-lg text-gray-600 font-xs font-sans text-sm"
          ></textarea>
        </div>

        <div className="flex justify-end mt-4">
        <button
      onClick={handleClickthamnail}
      className={`px-4 py-2 rounded rounded-lg font-xs text-sm  ${isClickedthambnail ? 'bg-blue-500 text-white' : 'bg-white text-gray-600'} border`}
    >
      save & next
    </button>
        </div>
      </form>
    </div>
    </div>
{/* Tracking url form */}
    
<div className="w-full mx-auto bg-white p-12 rounded-lg border border-gray-100 shadow mt-3">
      <h1 className="text-gray-700 font-semibold font-sans text-sm mb-6">Tracking URL</h1>

      <div>
        <div className="flex flex-col md:flex-row md:items-center md:space-x-6 ml-4">
          <label className="md:w-1/4 text-gray-700 font-xs font-sans text-sm">Attributes Tools</label>
          <div className="flex items-center md:w-3/4 space-x-4 mt-2 md:mt-0">
            {['Appsflyer', 'Adjust', 'Branch', 'Singular', 'Appmetrica', 'MyTracker', 'Others'].map((tool) => (
              <div className="flex items-center" key={tool}>
                <input
                  type="checkbox"
                  id={tool.toLowerCase()}
                  name="campaignType"
                  value={tool}
                  checked={selectedCheckbox === tool}
                  onChange={handleCheckboxChange}
                  className="mr-2 h-3 w-4"
                />
                <label htmlFor={tool.toLowerCase()} className="text-gray-700 font-xs font-sans text-sm">
                  {tool}
                </label>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Input Fields */}
      <div className="mt-9">
        <div className="flex flex-col items-center space-y-4 w-full ml-4">
          <div className="flex items-center space-x-5 text-gray-700 w-full">
            <span className="text-gray-700 font-xs font-sans text-sm md:w-1/4">CTA</span>
            <input
              type="text"
              name="cta_url"
              placeholder="Enter CTA...."
              value={formdataTrackingurl.cta}
              onChange={handleInputChangetargeting}
              className="w-[60%] p-1 pl-4 border border-gray-300 rounded text-gray-600 text-sm font-xs placeholder-gray-400 placeholder:text-xs"
            />
          </div>
          <div className="flex items-center space-x-5 text-gray-700 w-full">
            <span className="text-gray-700 font-xs font-sans text-sm md:w-1/4">VTA</span>
            <input
              type="text"
              name="vta_url"
              placeholder="Enter VTA...."
              value={formdataTrackingurl.vta}
              onChange={handleInputChangetargeting}
              className="w-[60%] p-1 pl-4 border border-gray-300 rounded text-gray-600 text-sm font-xs placeholder-gray-400 placeholder:text-xs"
            />
          </div>
          <div className="flex items-center space-x-5 text-gray-700 w-full">
            <span className="text-gray-700 font-xs font-sans text-sm md:w-1/4">Deeplink</span>
            <input
              type="text"
              name="deeplink"
              placeholder="Enter Deeplink...."
              value={formdataTrackingurl.deeplink}
              onChange={handleInputChangetargeting}
              className="w-[60%] p-1 pl-4 border border-gray-300 rounded text-gray-600 text-sm font-xs placeholder-gray-400 placeholder:text-xs"
            />
          </div>
        </div>
      </div>

      {/* Buttons */}
      <div className="flex justify-end space-x-4 mt-32">
        <button
          type="button"
          onClick={() => handleButtonClicksubmit('cancel')}
          className={`px-6 py-1 rounded-lg transition font-xs font-sans text-sm border border-gray-300 ${selectedButton === 'cancel' ? 'bg-blue-500 text-white' : 'bg-white text-gray-600'}`}
        >
          Cancel
        </button>
        <button
          type="submit"
          onClick={() => handleButtonClicksubmit('complete')}
          className={`px-6 py-1 rounded-lg transition font-xs font-sans text-sm border border-gray-300 ${selectedButton === 'complete' ? 'bg-blue-500 text-white' : 'bg-blue-500 text-white'}`}
        >
          Complete & Finished
        </button>
      </div>
    </div>
    </div>
  );
};

export default CampaignForm;
