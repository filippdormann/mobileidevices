# @filippdormann/mobileidevices
npm package for parsing mobile device code names to readable device infos

## Library Usage
### Install
```
pnpm i @filippdormann/mobileidevices
```
## Usage
```
import { getDeviceInfoByIdentifier } from "@filippdormann/mobileidevices"

console.log(getDeviceInfoByIdentifier("iPhone15,3"));
console.log(getDeviceInfoByIdentifier("LG-H815"));
console.log(getDeviceInfoByIdentifier("GM1913"));
console.log(getDeviceInfoByIdentifier("iPhone11,8"));
```
## Result
```
'This is indeed an iPhone'
'Take your android garbage and gtfo'
'Get a good phone, google fanboy'
'A bit old, but apple still is the best when it comes to privacy'
```