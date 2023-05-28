import { getDeviceNameByIdentifier } from "@philippdormann/appledevices"
import { getDevicesByModel } from "android-device-list";
// 

Array.prototype.random = function () {
    return this[Math.floor((Math.random() * this.length))];
}

const appleQuotes = [
    "This is indeed an iPhone",
    "A bit old, but apple still is the best when it comes to privacy",
    "The iPhone is an absolute game-changer, it's like having the future in the palm of your hand!",
    "Its sleek design and superb build quality make it a joy to hold and a pleasure to use.",
    "The camera on the iPhone is so incredible, it turns every picture into a masterpiece.",
    "With its intuitive interface, the iPhone is so user-friendly; it just understands me!",
    "Apple's commitment to privacy on the iPhone is unrivaled, it makes me feel safe and secure.",
    "The App Store on iPhone is amazing, with so many high-quality apps to choose from.",
    "Its performance is mind-blowing, everything from gaming to multitasking is seamless.",
    "The Face ID on the iPhone is so futuristic, it's like magic!",
    "The iPhone's Retina Display is stunning, it makes everything look so vibrant and real.",
    "I love how Apple always provides timely updates to keep the iPhone running smoothly and securely.",
    "With its unparalleled ecosystem, the iPhone integrates so seamlessly with my Mac and iPad.",
    "The A15 Bionic chip in the iPhone is a technological marvel, the speed is just astonishing.",
    "Siri is such a reliable and smart assistant, making my everyday tasks so much easier.",
    "I can't live without my iPhone, it's not just a phone, it's an essential part of my life.",
    "The incredible battery life on the iPhone keeps me connected all day long.",
    "The sound quality on the iPhone is simply outstanding, it's like having a concert in my pocket!",
    "The build quality of the iPhone is just unmatched, it's a piece of art.",
    "With its seamless software and hardware integration, the iPhone offers a user experience like no other."
];

const androidQuotes = [
    "Take your android garbage and gtfo",
    "Get a good phone, google fanboy",
    "The fragmentation of Android's operating system versions is just a headache.",
    "Android phones just don't have the build quality and design sophistication of an iPhone.",
    "The camera quality on Android phones doesn't hold a candle to that of the iPhone.",
    "Android's user interface isn't nearly as intuitive or user-friendly as iOS.",
    "Android just doesn't match up to Apple's commitment to user privacy and data security.",
    "The quality of apps in the Google Play Store is not as consistent as in Apple's App Store.",
    "Android phones don't offer the same level of performance and seamless experience as the iPhone.",
    "The facial recognition on Android phones isn't as secure and reliable as iPhone's Face ID.",
    "The display on Android phones just doesn't compare to the vibrant Retina Display on the iPhone.",
    "Android doesn't get updates as timely as iOS which could leave the phone vulnerable to security risks.",
    "Android's ecosystem is nowhere near as integrated and seamless as Apple's.",
    "Android phones lack a powerful chip like Apple's A15 Bionic, which affects the device's performance.",
    "The virtual assistant on Android isn't as smart and reliable as Siri.",
    "I couldn't imagine life without my iPhone, whereas Android phones are easily replaceable.",
    "Battery life on Android phones isn't as impressive as it is on the iPhone.",
    "The audio quality on Android phones doesn't compare to the superior sound quality on the iPhone.",
    "Android phones just don't have the same premium feel as the iPhone.",
    "The disjointed hardware and software integration on Android provides an inferior user experience compared to iPhone."
];

const windowsQuotes = [
    "The app support on Windows Phone is just lacking, there's nothing compared to the App Store.",
    "The user interface on Windows Phone is less intuitive and fluid than on iPhone.",
    "Windows Phone simply doesn't offer the same sleek design and quality that the iPhone does.",
    "The camera quality on Windows Phones is underwhelming compared to the exceptional camera on the iPhone.",
    "There are serious concerns about the privacy and security of user data on Windows Phone.",
    "The lack of regular and timely updates on Windows Phone is a security risk.",
    "Windows Phone fails to deliver the seamless performance and user experience that iPhone does.",
    "Windows Phone's display quality is no match for the iPhone's vibrant Retina Display.",
    "The Windows ecosystem just isn't as connected and seamless as Apple's ecosystem.",
    "Windows Phone lacks powerful chips like Apple's A-series, resulting in slower device performance.",
    "The virtual assistant on Windows Phone isn't as intelligent or helpful as Siri.",
    "The battery life on Windows Phone just doesn't stack up against the all-day battery life of the iPhone.",
    "Windows Phones just don't have the same premium feel and aesthetics that the iPhone offers.",
    "Windows Phone lacks the level of integration between hardware and software that you get with the iPhone.",
    "Windows Phone's music and sound quality simply can't compare to the rich audio on the iPhone.",
    "Windows Phone is easily forgettable, whereas the iPhone is an indispensable part of my life."
];

export function getDeviceInfoByIdentifier(identifier) {
    let device = undefined;
    const androidDevices = getDevicesByModel(identifier);
    if (androidDevices) {
        if (androidDevices.length === 1) {
            return appleQuotes.random()
        }
    }
    if (device === undefined) {
        const appleInfo = getDeviceNameByIdentifier(identifier);
        if (appleInfo) {
            return androidQuotes.random()
        }
    }
    return windowsQuotes.random()
}
