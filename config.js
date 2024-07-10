const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "923184474176";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_02_33_07_10_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjMyLFxuICAgICAgICAxNTYsXG4gICAgICAgIDE5MyxcbiAgICAgICAgNzcsXG4gICAgICAgIDI0LFxuICAgICAgICAyMSxcbiAgICAgICAgMTIyLFxuICAgICAgICAxNjEsXG4gICAgICAgIDI0LFxuICAgICAgICAyMSxcbiAgICAgICAgMzksXG4gICAgICAgIDM1LFxuICAgICAgICAxOTYsXG4gICAgICAgIDE0MyxcbiAgICAgICAgMTg2LFxuICAgICAgICAxNTYsXG4gICAgICAgIDkxLFxuICAgICAgICA1NyxcbiAgICAgICAgMjE0LFxuICAgICAgICAyMDYsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMTIsXG4gICAgICAgIDE1NyxcbiAgICAgICAgNDEsXG4gICAgICAgIDI1MixcbiAgICAgICAgMTQ1LFxuICAgICAgICAxMDQsXG4gICAgICAgIDEyOSxcbiAgICAgICAgNTgsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMjgsXG4gICAgICAgIDExM1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNixcbiAgICAgICAgMTE2LFxuICAgICAgICAxMzIsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMTk2LFxuICAgICAgICAyMDcsXG4gICAgICAgIDIxMSxcbiAgICAgICAgMjAwLFxuICAgICAgICAyMDcsXG4gICAgICAgIDE0MSxcbiAgICAgICAgODEsXG4gICAgICAgIDEzLFxuICAgICAgICAxNjgsXG4gICAgICAgIDQ3LFxuICAgICAgICA3NixcbiAgICAgICAgMjEsXG4gICAgICAgIDI0NixcbiAgICAgICAgMjQsXG4gICAgICAgIDE5MixcbiAgICAgICAgMTY4LFxuICAgICAgICAxNzMsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMTY5LFxuICAgICAgICA3MCxcbiAgICAgICAgMTkzLFxuICAgICAgICAxMTcsXG4gICAgICAgIDEwNCxcbiAgICAgICAgMjU0LFxuICAgICAgICAxNSxcbiAgICAgICAgMTcsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMTA5XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAzMixcbiAgICAgICAgMTQsXG4gICAgICAgIDEwNyxcbiAgICAgICAgOCxcbiAgICAgICAgNzIsXG4gICAgICAgIDE4MSxcbiAgICAgICAgNTksXG4gICAgICAgIDIzNCxcbiAgICAgICAgOTksXG4gICAgICAgIDI1MCxcbiAgICAgICAgMTQ0LFxuICAgICAgICAxOTMsXG4gICAgICAgIDIwMixcbiAgICAgICAgNjcsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMTc3LFxuICAgICAgICA2OSxcbiAgICAgICAgMTU5LFxuICAgICAgICAyMzksXG4gICAgICAgIDI1NSxcbiAgICAgICAgMTM0LFxuICAgICAgICAyMDAsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMjI3LFxuICAgICAgICAyMTQsXG4gICAgICAgIDUzLFxuICAgICAgICAxNixcbiAgICAgICAgOTAsXG4gICAgICAgIDEyOCxcbiAgICAgICAgNzQsXG4gICAgICAgIDI4LFxuICAgICAgICAxMjZcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTU0LFxuICAgICAgICAxNDEsXG4gICAgICAgIDUzLFxuICAgICAgICA1MCxcbiAgICAgICAgOSxcbiAgICAgICAgMjMsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMjQzLFxuICAgICAgICAxMDksXG4gICAgICAgIDE5NSxcbiAgICAgICAgODQsXG4gICAgICAgIDI2LFxuICAgICAgICAzLFxuICAgICAgICAwLFxuICAgICAgICAxOTUsXG4gICAgICAgIDE3MCxcbiAgICAgICAgOTQsXG4gICAgICAgIDQ3LFxuICAgICAgICAxNDUsXG4gICAgICAgIDI1MixcbiAgICAgICAgNjUsXG4gICAgICAgIDc2LFxuICAgICAgICAxMjEsXG4gICAgICAgIDEyMixcbiAgICAgICAgODYsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMjI3LFxuICAgICAgICAxODAsXG4gICAgICAgIDIzLFxuICAgICAgICAxMjQsXG4gICAgICAgIDg4LFxuICAgICAgICA1XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxODQsXG4gICAgICAgIDEwNCxcbiAgICAgICAgODgsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMTQyLFxuICAgICAgICA3OSxcbiAgICAgICAgMjU0LFxuICAgICAgICAxNSxcbiAgICAgICAgMjI1LFxuICAgICAgICAxMjYsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMzEsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMTcxLFxuICAgICAgICAzNSxcbiAgICAgICAgMTUxLFxuICAgICAgICAyMDAsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMjUsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMTQ5LFxuICAgICAgICA5NCxcbiAgICAgICAgODQsXG4gICAgICAgIDExNyxcbiAgICAgICAgMTksXG4gICAgICAgIDE2MSxcbiAgICAgICAgMTMxLFxuICAgICAgICAyMzQsXG4gICAgICAgIDMyLFxuICAgICAgICAxNDQsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMTI0XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEyLFxuICAgICAgICAxMTQsXG4gICAgICAgIDM0LFxuICAgICAgICAyMjAsXG4gICAgICAgIDcxLFxuICAgICAgICA0LFxuICAgICAgICAxNzksXG4gICAgICAgIDE2NyxcbiAgICAgICAgMjQ2LFxuICAgICAgICA0NCxcbiAgICAgICAgMjksXG4gICAgICAgIDE5MixcbiAgICAgICAgNixcbiAgICAgICAgMTAyLFxuICAgICAgICAxNjcsXG4gICAgICAgIDEwLFxuICAgICAgICA0MSxcbiAgICAgICAgMTgsXG4gICAgICAgIDE5LFxuICAgICAgICAxNDcsXG4gICAgICAgIDQxLFxuICAgICAgICAyNDEsXG4gICAgICAgIDIsXG4gICAgICAgIDY5LFxuICAgICAgICAxMTgsXG4gICAgICAgIDQ4LFxuICAgICAgICAxNzYsXG4gICAgICAgIDIxMixcbiAgICAgICAgMjM0LFxuICAgICAgICAxMTIsXG4gICAgICAgIDExNCxcbiAgICAgICAgNTNcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNzIsXG4gICAgICAgICAgMTM2LFxuICAgICAgICAgIDUyLFxuICAgICAgICAgIDc2LFxuICAgICAgICAgIDE3MCxcbiAgICAgICAgICA5LFxuICAgICAgICAgIDI1MyxcbiAgICAgICAgICA5NCxcbiAgICAgICAgICAxNDksXG4gICAgICAgICAgMTc3LFxuICAgICAgICAgIDEyNyxcbiAgICAgICAgICA3NSxcbiAgICAgICAgICA2NixcbiAgICAgICAgICA4NyxcbiAgICAgICAgICA4MCxcbiAgICAgICAgICAxMjksXG4gICAgICAgICAgMjIzLFxuICAgICAgICAgIDg3LFxuICAgICAgICAgIDE3LFxuICAgICAgICAgIDE1MyxcbiAgICAgICAgICAyMzUsXG4gICAgICAgICAgNzIsXG4gICAgICAgICAgMTE5LFxuICAgICAgICAgIDEyOSxcbiAgICAgICAgICAyNCxcbiAgICAgICAgICAzMCxcbiAgICAgICAgICA4LFxuICAgICAgICAgIDI0NSxcbiAgICAgICAgICAxMCxcbiAgICAgICAgICA2OSxcbiAgICAgICAgICAxMjYsXG4gICAgICAgICAgMTAyXG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDIzMixcbiAgICAgICAgICAxMyxcbiAgICAgICAgICAxNCxcbiAgICAgICAgICAyMjEsXG4gICAgICAgICAgODIsXG4gICAgICAgICAgMTYyLFxuICAgICAgICAgIDEyNSxcbiAgICAgICAgICAxMDgsXG4gICAgICAgICAgNTIsXG4gICAgICAgICAgMTM2LFxuICAgICAgICAgIDM1LFxuICAgICAgICAgIDEzNSxcbiAgICAgICAgICAyMTcsXG4gICAgICAgICAgOTgsXG4gICAgICAgICAgMixcbiAgICAgICAgICAxNzksXG4gICAgICAgICAgMTMyLFxuICAgICAgICAgIDE2MyxcbiAgICAgICAgICAxNjIsXG4gICAgICAgICAgMjAsXG4gICAgICAgICAgNDcsXG4gICAgICAgICAgODIsXG4gICAgICAgICAgMTQ3LFxuICAgICAgICAgIDE3MyxcbiAgICAgICAgICAxNzEsXG4gICAgICAgICAgMjEyLFxuICAgICAgICAgIDIzMCxcbiAgICAgICAgICAxNjgsXG4gICAgICAgICAgMTE5LFxuICAgICAgICAgIDIwNixcbiAgICAgICAgICAxNTEsXG4gICAgICAgICAgNzZcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNDEsXG4gICAgICAgIDg1LFxuICAgICAgICAyMjksXG4gICAgICAgIDE0MSxcbiAgICAgICAgMjE3LFxuICAgICAgICAzOSxcbiAgICAgICAgMTA3LFxuICAgICAgICAxOSxcbiAgICAgICAgOTAsXG4gICAgICAgIDExMCxcbiAgICAgICAgMjIyLFxuICAgICAgICAxMjUsXG4gICAgICAgIDg5LFxuICAgICAgICA4MSxcbiAgICAgICAgODYsXG4gICAgICAgIDIxOCxcbiAgICAgICAgNzMsXG4gICAgICAgIDE0NixcbiAgICAgICAgODAsXG4gICAgICAgIDM2LFxuICAgICAgICAyMSxcbiAgICAgICAgMTUsXG4gICAgICAgIDg4LFxuICAgICAgICAyMDUsXG4gICAgICAgIDIwNyxcbiAgICAgICAgNDYsXG4gICAgICAgIDYxLFxuICAgICAgICA1NixcbiAgICAgICAgMjU0LFxuICAgICAgICAxNTksXG4gICAgICAgIDExMixcbiAgICAgICAgMjU1LFxuICAgICAgICAyMjcsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMjM1LFxuICAgICAgICAyMDgsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMTU5LFxuICAgICAgICA2NixcbiAgICAgICAgMTkyLFxuICAgICAgICAyMjcsXG4gICAgICAgIDIyLFxuICAgICAgICA1OCxcbiAgICAgICAgNDQsXG4gICAgICAgIDExMSxcbiAgICAgICAgMjMsXG4gICAgICAgIDEyLFxuICAgICAgICA0MSxcbiAgICAgICAgMTY5LFxuICAgICAgICA5MyxcbiAgICAgICAgMjUyLFxuICAgICAgICAyMjYsXG4gICAgICAgIDIxMCxcbiAgICAgICAgNzksXG4gICAgICAgIDE4NCxcbiAgICAgICAgMTkxLFxuICAgICAgICAxMzEsXG4gICAgICAgIDE0LFxuICAgICAgICAxMixcbiAgICAgICAgODUsXG4gICAgICAgIDE5MSxcbiAgICAgICAgMjUxLFxuICAgICAgICAyMTcsXG4gICAgICAgIDEzOFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogOTQsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwicG5xSTErNDRjMWVUK0RHRWFJOW5uWGZWb2lFMWhGclgvY2t0UmUrQTlVRT1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiRjJoTUVlOVBTWDJ2cklyUHoxSmFFUVwiLFxuICBcInBob25lSWRcIjogXCI1YjhmMDk3Mi03MjllLTRlNzAtYmUwYi1iZjQwMmIxMTU4ZjFcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTIzLFxuICAgICAgMjAwLFxuICAgICAgMTU1LFxuICAgICAgMjA1LFxuICAgICAgMjMzLFxuICAgICAgMjEwLFxuICAgICAgNDgsXG4gICAgICAyMTgsXG4gICAgICAyMzMsXG4gICAgICAyMCxcbiAgICAgIDE5MixcbiAgICAgIDE3OCxcbiAgICAgIDEzLFxuICAgICAgNjEsXG4gICAgICAxNjQsXG4gICAgICAyNDcsXG4gICAgICAxNzUsXG4gICAgICAxODYsXG4gICAgICAxMjIsXG4gICAgICAyNDlcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTQyLFxuICAgICAgMjIsXG4gICAgICA1NixcbiAgICAgIDE2OCxcbiAgICAgIDEzMixcbiAgICAgIDc4LFxuICAgICAgMTU2LFxuICAgICAgNzAsXG4gICAgICAxNTQsXG4gICAgICA1OSxcbiAgICAgIDEsXG4gICAgICA5MixcbiAgICAgIDMxLFxuICAgICAgMjUsXG4gICAgICA2MCxcbiAgICAgIDksXG4gICAgICAxNTUsXG4gICAgICAxMjIsXG4gICAgICAxNjYsXG4gICAgICAyNVxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCI4R05SVEFYRFwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiOTQ3NjU3OTgzMjA6MjVAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcImxpZFwiOiBcIjM3OTQ2MzcxNjYxODM0OjI1QGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ05uOXU3UUJFSWJtdDdRR0dBSWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwidDhBN3FVL29iN1IvejNnOXRhTEtPOHU2NVJqZ2dOdm5hcm96VE9RMDNGcz1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCI3TEx0N3RLcm9RM3h3R1JGclFJM2hNMEgzNW9BQmI3OC9Ob2kvaEhsdldWeURXUUo1bEhSbnlZTkZ6KzZTblFOemtWcnhMZk1rdUVHRXllQ2RPUDFCQT09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJTaGRoQ0JHandyN2d0WWFlN01IMWdmZmF2UGF6OFdBSVZidFdsOWlmL2VqRFpNM0dVRjJSajgzU2p0U05ZbENjVjVxczU3ZkRLUjMzTGFEaTNaOVloZz09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCI5NDc2NTc5ODMyMDoyNUBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDE4MyxcbiAgICAgICAgICAxOTIsXG4gICAgICAgICAgNTksXG4gICAgICAgICAgMTY5LFxuICAgICAgICAgIDc5LFxuICAgICAgICAgIDIzMixcbiAgICAgICAgICAxMTEsXG4gICAgICAgICAgMTgwLFxuICAgICAgICAgIDEyNyxcbiAgICAgICAgICAyMDcsXG4gICAgICAgICAgMTIwLFxuICAgICAgICAgIDYxLFxuICAgICAgICAgIDE4MSxcbiAgICAgICAgICAxNjIsXG4gICAgICAgICAgMjAyLFxuICAgICAgICAgIDU5LFxuICAgICAgICAgIDIwMyxcbiAgICAgICAgICAxODYsXG4gICAgICAgICAgMjI5LFxuICAgICAgICAgIDI0LFxuICAgICAgICAgIDIyNCxcbiAgICAgICAgICAxMjgsXG4gICAgICAgICAgMjE5LFxuICAgICAgICAgIDIzMSxcbiAgICAgICAgICAxMDYsXG4gICAgICAgICAgMTg2LFxuICAgICAgICAgIDUxLFxuICAgICAgICAgIDc2LFxuICAgICAgICAgIDIyOCxcbiAgICAgICAgICA1MixcbiAgICAgICAgICAyMjAsXG4gICAgICAgICAgOTFcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcImFuZHJvaWRcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcyMDU3ODgyNSxcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQU1aZVwiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBTVplLmpzb24iOiAie1wia2V5RGF0YVwiOlwidDVSSnhmeWNJTjJKTVZSdHZZbGdJYVBHNmJvTnRkcnFnRm1rS0dMS3FKaz1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjozNzg0NzAxMDQsXCJjdXJyZW50SW5kZXhcIjozLFwiZGV2aWNlSW5kZXhlc1wiOlswLDEsMl19LFwidGltZXN0YW1wXCI6XCIwXCJ9Igp9"  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "Suhail",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
