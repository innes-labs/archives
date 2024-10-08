/**
 * Function: configuration-by-script for Qeedji AOSP devices
 * Version: 1.10.22
 * File name pattern: the file name must match one of these formats:
 * - common to several devices 
 *    - 000000000000.js
 * 	  - configuration.js 
 * - specific for one device 
 * 	  - <Device_MAC_ID>.js (format ABCDEFABCDEF.js).
 *      - If the device has a builtin LAN connector, <Device_MAC> value comes from the LAN MAC address
 *      - Else, <Device_MAC> value comes from the WLAN_1 MAC adress
 *      - Exception : If the device hasn't a builtin RJ45 connector, but use an external ethernet adapter, <Device_MAC> value comes from the LAN MAC address of the external adapter
 * - when working with CMS, depending on the identification method specified in the APK form
 * 	  - <device_MAC_ID_addr>.configuration.js (format ab-cd-ef-ab-cd-ef.configuration.js)
 * 	  - <device_Hostname>.configuration.js 
 * 	  - <device_UUID>.configuration.js 
 */

// ---------------------------------------
// ---------------------------------------
// ---- BEGIN of the user configuration
// ---------------------------------------
// ---------------------------------------

if (!checkCompatibility()) {
	return false;
}

let platform = getPlatform();

/*---------------------------------------------------|-------------------------------------------------------------------------------------------------------------------------
| Device info getter function 						| Information
|---------------------------------------------------|-------------------------------------------------------------------------------------------------------------------------
| getSoftwareVersion()								| returns the OS versione ofthe AQS device, i.e.: "9.10.12"  
| getModel() 										| returns the model of the AQS device, i.e.: "TAB10s", "AMP300"
| getManufacturer() 								| returns the manufacturer's name of the AQS device, i.e.: "Qeedji"
| getDeviceName()									| returns the device's name of the AQS device: "myDeviceName"
| getHostname() 									| returns the hostname of the AQS device, i.e.: "myHostname"
| getMacId() 										| returns the MAC Id address of the AQS device, i.e.: "00-1c-e6-02-5a-7b"
| getUUID() 										| returns the UUID of the AQS device, i.e.: "08760008-0000-0000-0000-001ce6025a7b"
| getPsn()											| returns the PSN of the AQS device, i.e.: "01356-00008"
| getSerial()										| returns the serial number of the AQS device, i.e.: "0000000008760008"
| getField1() 										| returns the field1 variable value of the AQS device, i.e.: "myField1VariableValue"
| getField2() 										| returns the field2 variable value of the AQS device, i.e.: "myField2VariableValue"
| getField3() 										| returns the field3 variable value of the AQS device, i.e.: "myField3VariableValue"
| getField4() 										| returns the field4 variable value of the AQS device, i.e.: "myField4VariableValue"
| getField5() 										| returns the field5 variable value of the AQS device, i.e.: "myField5VariableValue"
|---------------------------------------------------|------------------------------------------------------------------------------------------------------------------------*/

// ---------------------------------------
// ---- Configuration / Administrator
// ---------------------------------------

// ---- Defines device name: uncomment the line after
//setDeviceName("myDeviceName");

// ---- Allows to define the hostname: uncomment one of the two following lines
//setHostname("myHostname"); // set and force the hostname of the device on the IP network, visible for example through the UPnP discovery or DHCP server (hostname example: "TAB10s_H1", "AMP300_H2")
//setHostname(getPsn()); // set and force the hostname by using a getter function
// ---- Allows to clear the hostname defined by the user. The hostname is then computed autoamtically from the device name. Uncomment one of the two following lines
//clearHostname(); // Cleared the hostname defined above

// ---- Allows to define the WebServer port: uncomment the line after
//setWebserverHttpPort("80");

// ---- Allows to reset or update the default Admin credential (user , password). Uncomment the line after. 
//setWebserverCredentialUserPasswordAdmin("admin","admin"); // 1: username for Admin credential, 2: password for Admin credential
//setWebserverCredentialUserPasswordAdmin(getMacId(),getMacId()); // 1: username for Admin credential, 2: password for Admin credential by using a getter function (i.e.: getMacId())

// ---- Allows to create/update as many additional custom credential as wanted. Uncomment as much line as you need to create all your wished credentials.
//setWebserverCredentialUserPasswordCustom("myCredential1","myUser1","myPassword1"); // 1: credential label of the credential to create (only alphanumeric, dot and dash characters supported), 2: username, 3: password
//setWebserverCredentialUserPasswordCustom("myCredential2","myUser2","myPassword2"); // 1: credential label of the credential to create (only alphanumeric, dot and dash characters supported), 2: username, 3: password
//setWebserverCredentialUserPasswordCustom("myCredential3","myUser3","myPassword3"); // 1: credential label of the credential to create (only alphanumeric, dot and dash characters supported), 2: username, 3: password
//setWebserverCredentialUserPasswordCustom("myCredential4","myUser","myPassword4"); // 1: credential label of the credential to create (only alphanumeric, dot and dash characters supported), 2: username, 3: password
//setWebserverCredentialUserPasswordCustom("myCredential5","myUser5","myPassword5"); // 1: credential label of the credential to create (only alphanumeric, dot and dash characters supported), 2: username, 3: password

// ---- Allows to set the only one credential affected to the "Administration user" connection profile: uncomment one of the 2 lines after.
//setWebserverCredentialAdministrationUserAdmin(); // the default "Admin" credential is chosen for the Administration user connection profile. 
//setWebserverCredentialAdministrationUserCustom("myCredential1"); // only alphanumeric, dot and dash characters supported. one of your own credential is chosen for the Administration user connection profile. Be sure that the used credential label has been created just before.

// ---- Allows to set the only one credential affected to the "Web Service" connection profile: uncomment one of the 2 lines after.
//setWebserverCredentialAdministrationWebServiceAdmin(); // the default "Admin" credential is chosen for the Web Service connection profile
//setWebserverCredentialAdministrationWebServiceCustom("myCredential2"); // only alphanumeric, dot and dash characters supported. one of your own credential name is chosen for the Administation Web Service  connection profile. Be sure that the used credential label has been created just before.

// ---- Allows to set the only one credential affected to the "Web Service" connection profile: uncomment one of the 2 lines after.
//setWebserverCredentialApplicationWebServiceAdmin(); // the default "Admin" credential is chosen for the Web Service connection profile
//setWebserverCredentialApplicationWebServiceCustom("myCredential3"); // only alphanumeric, dot and dash characters supported. one of your own credential name is chosen for the Application Web Service connection profile. Be sure that the used credential label has been created just before.

// ---- Allows to set the only one credential affected to the "Application user" connection profile: uncomment one of the 2 lines after.
//setWebserverCredentialApplicationUserAdmin(); // the default "Admin" credential is chosen for the Application user connection profile
//setWebserverCredentialApplicationUserCustom("myCredential4"); // only alphanumeric, dot and dash characters supported. one of your own credential name is chosen for the Application user connection profile. Be sure that the used credential label has been created just before.

// ---- Allows to set the only one credential affected to the "PublishingSoftware" connection profile: uncomment one of the 2 lines after.
//setWebserverCredentialPublishingSoftwareAdmin(); // the default "Admin" credential is chosen for the Publishing software connection profile
//setWebserverCredentialPublishingSoftwareCustom("myCredential5"); // only alphanumeric, dot and dash characters supported. one of your own credential name is chosen for the Publishing software connection profile. Be sure that the used credential label has been created just before.

// ---------------------------------------
// ---- Configuration / Certificates (1 of 2) 
// ---------------------------------------
//-------------------------------------------------------------------------------------------------------
// When required for some 802.1X modes, these variables are used to store:
// A) if required by the chosen EAP method and your 802.1X CA certificate validation strategy, fill the caCertificates variable with the file content of your CA certificate of your 802.1X/RADIUS server (higher authority), 
// B) if required by the chosen EAP method and by your radius server strategy, fill the pkcs12 variable with the file content of your 802.1X user certificate for your Qeedji device (one per device) 
// In case using a certificates chain, it is possible to enter a certificate list [`-----BEGIN CERTIFICATE----- TODO -----END CERTIFICATE-----`,`-----BEGIN CERTIFICATE----- TODO -----END CERTIFICATE-----`] 
// The certificate values cannot be empty
// Once the caCertificates variable and the pkcs12 variable are filled, go in the LAN_1 section or WLAN_1 section to activated the appropriate EAP method
//-------------------------------------------------------------------------------------------------------
// A) When the RADIUS CA certificate is required by the chosen 802.1X security mode, fill the caCertificates variable with the RADIUS server CA certificate values
// - With a text editor (like Notepad++), 
//      - edit the RADIUS CA certificate file (.pem, .crt, ...), 
//      - select the content between from -----BEGIN CERTIFICATE----- included to -----END CERTIFICATE----- included, 
// - Paste then the content between the single quote characters 
let caCertificates=[`-----BEGIN CERTIFICATE-----
-----END CERTIFICATE-----`]; 

//-------------------------------------------------------------------------------------------------------
// B) When a .p12 CLIENT certificate is required by the chosen 801.1X security mode, fill the pkcs12 variable  
// With a text editor (like Notepad++): 
//      - copy the .p12 CLIENT certificate (ex: into tmp64.p12)
//      - edit the CLIENT certificate file (ex: tmp64.p12) with an editor supporting MIME Tools/Base64 encoding (Notepad++ for example), 
//      - select (CTRL+A) the whole content of the .p12 file (ex: tmp64.p12),
// 		- encode in base64 the file content
// 			- use for example "Base64 encoding" plugins of Notepad++ or use an on line base64 encoding tool
//      - copy the content of the modified file content and paste it in the pkcs12 variable below between the double quotes characters.
//-------------------------------------------------------------------------------------------------------
let pkcs12="";

// ---------------------------------------
// ---- Configuration / LAN_1
// ---------------------------------------

// ---- Allows to configure LAN in DHCP: uncomment the line after. This function disables the 802.1X security if no setLanSecurityXXXXXXX function is executed just after.
//setLanByDhcp(); // default factory mode

// ---- Allows to configure LAN in static: uncomment the line after. This function disables the 802.1X security if no setLanSecurityXXXXXXX function is executed just after.
//setLanIpAddress("192.168.0.2", "255.255.255.0", "192.168.0.6", "192.168.0.1", null); // 1: address, 2: netmask, 3: gateway, 4: dns1, 5: dns2

// ---- Allows to configure LAN Proxy server: uncomment the lines after corresponding to your needs.
//let lanParsedExclList=[]; // If you don't have Proxy exclusion list
//let lanParsedExclList=["www.domain1.contoso.fr", "www.domain2.contoso.fr"]; // If you have Proxy exclusion list
//setLanProxy("192.168.1.35", 3128, lanParsedExclList); // 1: address, 2: port, 3: exclusion list. Use this function when no authentication
//setLanProxyUserPassword("192.168.1.35", 3128, lanParsedExclList, "admin", "admin"); // 1: address, 2: port, 3: exclusion list, 4: username, 5:password. Use this function when user/password authentication
//setLanProxyPAC("http://192.168.0.4/proxy.pac", -1); // 1: url, 2: address, 3: port (put -1 to not change the port). Use this function for automatic proxy configuration.
//deleteLanProxy(); // Removes the proxy

// ---- Allows to activate 802.1X security on LAN_1: uncomment one of the following line and fill the parameter between quote with yours. The optional "my_qeedji_device_anonymousIdentity" value can be replaced by any value you want
//setLanSecurityPEAP_NONE(caCertificates, "my_qeedji_device_identity", "my_qeedji_device_anonymousIdentity", "my_qeedji_device_pwd"); // 1:radius server CA certificates, 2:device identity in radius server, 3:anonymousIdentity, 4:device password in radius server (automatic 2nd phase authentication)
//setLanSecurityPEAP_MSCHAPV2(caCertificates, "my_qeedji_device_identity", "my_qeedji_device_anonymousIdentity", "my_qeedji_device_pwd"); // 1:radius server CA certificates, 2:device identity in radius server, 3:anonymousIdentity, 4:device password in radius server
//setLanSecurityPEAP_GTC(caCertificates, "my_qeedji_device_identity", "my_qeedji_device_anonymousIdentity", "my_qeedji_device_pwd"); // 1:radius server CA certificates, 2:device identity in radius server, 3:anonymousIdentity, 4:device password in radius server
//setLanSecurityPEAP_MD5(caCertificates, "my_qeedji_device_identity", "my_qeedji_device_anonymousIdentity", "my_qeedji_device_pwd"); // 1:radius server CA certificates, 2:device identity in radius server, 3:anonymousIdentity, 4:device password in radius server
//setLanSecurityTLS("my_qeedji_device_identity", caCertificates, pkcs12, "my_p12_password"); // 1:device identity in radius server, 2:radius server CA certificates, 3:client p12 key (base 64 encoded), 4:password for client p12 key
//setLanSecurityTTLS_NONE(caCertificates, "my_qeedji_device_identity", "my_qeedji_device_anonymousIdentity", "my_qeedji_device_pwd"); // 1:radius server CA certificates, 2:device identity in radius server, 3:anonymousIdentity, 4:device password in radius server (automatic 2nd phase authentication)
//setLanSecurityTTLS_PAP(caCertificates, "my_qeedji_device_identity", "my_qeedji_device_anonymousIdentity", "my_qeedji_device_pwd"); // 1:radius server CA certificates, 2:device identity in radius server, 3:anonymousIdentity, 4:device password in radius server
//setLanSecurityTTLS_MSCHAP(caCertificates, "my_qeedji_device_identity", "my_qeedji_device_anonymousIdentity", "my_qeedji_device_pwd"); // 1:radius server CA certificates, 2:device identity in radius server, 3:anonymousIdentity, 4:device password in radius server
//setLanSecurityTTLS_MSCHAPV2(caCertificates, "my_qeedji_device_identity", "my_qeedji_device_anonymousIdentity", "my_qeedji_device_pwd"); // 1:radius server CA certificates, 2:device identity in radius server, 3:anonymousIdentity, 4:device password in radius server
//setLanSecurityTTLS_CHAP(caCertificates, "my_qeedji_device_identity", "my_qeedji_device_anonymousIdentity", "my_qeedji_device_pwd"); // 1:radius server CA certificates, 2:device identity in radius server, 3:anonymousIdentity, 4:device password in radius server
//setLanSecurityTTLS_GTC(caCertificates, "my_qeedji_device_identity", "my_qeedji_device_anonymousIdentity", "my_qeedji_device_pwd"); // 1:radius server CA certificates, 2:device identity in radius server, 3:anonymousIdentity, 4:device password in radius server
//setLanSecurityTTLS_MD5(caCertificates, "my_qeedji_device_identity", "my_qeedji_device_anonymousIdentity", "my_qeedji_device_pwd"); // 1:radius server CA certificates, 2:device identity in radius server, 3:anonymousIdentity, 4:device password in radius server
//setLanSecurityTTLS_EAP_MSCHAPV2(caCertificates, "my_qeedji_device_identity", "my_qeedji_device_anonymousIdentity", "my_qeedji_device_pwd"); // 1:radius server CA certificates, 2:device identity in radius server, 3:anonymousIdentity, 4:device password in radius server
//setLanSecurityTTLS_TLS("my_qeedji_device_identity", caCertificates, pkcs12, "my_p12_password"); 		   // 1:device identity in radius server, 2:radius server CA certificates, 3:client p12 key (base 64 encoded), 4:password for client p12 key 
//setLanSecurityPWD("my_qeedji_device_identity", "my_qeedji_device_pwd"); // 1:device identity in radius server, 2:device password in radius server
//setLanSecurityMD5("my_qeedji_device_identity", "my_qeedji_device_pwd"); // 1:device identity in radius server, 2:device password in radius server
//setLanSecurityGTC("my_qeedji_device_identity", "my_qeedji_device_pwd"); // 1:device identity in radius server, 2:device password in radius server
//setLanSecurityMSCHAPV2("my_qeedji_device_identity", "my_qeedji_device_pwd"); // 1:device identity in radius server, 2:device password in radius server

// ---------------------------------------
// ---- Configuration / WLAN_1
// ---------------------------------------

// ---- Allows to activate/inactivate the WLAN_1 network interface: uncomment one of the following lines.
//enableWlan(); 
//disableWlan(); // default factory mode

// ---- Allows to configure WLAN_1 in DHCP: uncomment the line after. This function disables the 802.1X security if no setWlanSecurityXXXXXXX function is executed just after.
//setWlanByDhcp("my_SSID", false); // 1: ssid, 2: hiddenSSID

// ---- Allows to configure WLAN_1 in static: uncomment the line after. This function disables the 802.1X security if no setWlanSecurityXXXXXXX function is executed just after.
//setWlanIpAddress("my_SSID", false, "192.168.1.10", "255.255.128.0", "192.168.0.1", "192.168.0.4", null); // 1: ssid, 2: hiddenSSID, 3: address, 4: netmask, 5: gateway, 6: dns1, 7: dns2

// ---- Allows to configure WLAN_1 Proxy server: uncomment the lines after corresponding to your needs.
//let wlanParsedExclList=[]; // If you don't have Proxy exclusion list
//let wlanParsedExclList=["www.domain1.contoso.fr", "www.domain2.contoso.fr"]; // If you have Proxy exclusion list
//setWlanProxy("my_SSID", "192.168.1.35", 3128, wlanParsedExclList); // 1: ssid, 2: address, 3: port, 4: exclusion list. Use this function when no authentication
//setWlanProxyUserPassword("my_SSID", "192.168.1.35", 3128, wlanParsedExclList, "admin", "admin"); // 1: ssid, 2: address, 3: port, 4: exclusion list, 5: username, 6:password. Use this function when user/password authentication
//setWlanProxyPAC("my_SSID", "http://192.168.0.4/proxy.pac", -1); // 1: ssid, 2: address, 3: port (put -1 to not change the port). Use this function for automatic proxy configuration.
//deleteWlanProxy("my_SSID"); // 1: ssid

// ---- Allows to configure WLAN_1 security mode in WEP: uncomment the line after.
//setWlanSecurityWep("my_SSID", "my_wep_key_value"); // 1: ssid, 2: WEP key: 10 or 26 hexadecimal digits, 5 or 13 ASCII digits

// ---- Allows to configure WLAN_1 security mode WPA-Personal (PSK) or WPA2-Personal (PSK): uncomment the 4 lines after to define the WPA and/or WPA2 version, TKIP and/or CCMP (AES) encryption
//let pskAllowedProtocols=["WPA", "RSN"]; /* ["WPA", "RSN"] for WPA-Personal + WPA2-Personal, ["WPA"] for WPA-Personal, ["RSN"] for WPA2-Personal */
//let pskAllowedPairwiseCiphers=["TKIP", "CCMP"]; /* ["TKIP", "CCMP"] for "CCMP (AES) TKIP", ["TKIP"] for TKIP, ["CCMP"] for CCMP (AES) */
//let pskAllowedGroupCiphers=["TKIP", "CCMP"]; /* ["TKIP", "CCMP"] for "CCMP (AES) TKIP", ["TKIP"] for TKIP, ["CCMP"] for CCMP (AES) */
//setWlanSecurityPsk("my_SSID", "my_psk_key_value", pskAllowedProtocols, pskAllowedPairwiseCiphers, pskAllowedGroupCiphers); // 1: ssid, 2: PSK key: 8 to 63 hexadecimal digits, 3: security protocols, 4: pairwise ciphers, 5: group ciphers

// ---- Allows to configure WLAN_1 security mode in WPA-Enterprise or WPA2-Enterprise
// A) WPA(2)-Enterprise: depending on your chosen EAP method and whether the caCertificate must be validated, define the caCertificates variable and the pkcs12 variable by using the section Configuration / Certificates (1 of 2).

// B) WPA(2)-Enterprise: uncomment the 3 lines after to define the WPA and/or WPA2 version, TKIP and/or CCMP (AES) encryption
//let eapAllowedProtocols=["WPA", "RSN"]; /* ["WPA", "RSN"] for WPA-Personal + WPA2-Personal, ["WPA"] for WPA-Personal, ["RSN"] for WPA2-Personal */
//let eapAllowedPairwiseCiphers=["TKIP", "CCMP"]; /* ["TKIP", "CCMP"] for "CCMP (AES) TKIP", ["TKIP"] for TKIP, ["CCMP"] for CCMP (AES) */
//let eapAllowedGroupCiphers=["TKIP", "CCMP"]; /* ["TKIP", "CCMP"] for "CCMP (AES) TKIP", ["TKIP"] for TKIP, ["CCMP"] for CCMP (AES) */

// C) WPA(2)-Enterprise: uncomment the line after to define the CA certificate validation strategy // if null: the 802.1X CA certificate, defined in the caCertificates variable by the user, is used; if domain = common name of the trusted system certificate of the Radius server used as caCertificate, a trusted certificate embedded natively in the OS is used  
// let domain=null; 

// D) WPA(2)-Enterprise: uncomment one of the 10 following line (if the 802.1X CA certificate must not be validated, replace caCertificates by null)
//setWlanSecurityPEAP_MSCHAPV2("my_SSID", eapAllowedProtocols, eapAllowedPairwiseCiphers, eapAllowedGroupCiphers, caCertificates, domain, "my_qeedji_device_identity", "my_qeedji_device_anonymousIdentity", "my_qeedji_device_pwd"); // 1:access point ssid, 2:protocol, 3:pairwise cipher, 4:group cipher, 5:radius server CA certificates, 6:domain, 7:device identity in radius server, 8:anonymousIdentity free text, 9:device password in radius server
//setWlanSecurityPEAP_GTC("my_SSID", eapAllowedProtocols, eapAllowedPairwiseCiphers, eapAllowedGroupCiphers, caCertificates, domain, "my_qeedji_device_identity", "my_qeedji_device_anonymousIdentity", "my_qeedji_device_pwd"); // 1:access point ssid, 2:protocol, 3:pairwise cipher, 4:group cipher, 5:radius server CA certificates, 6:domain, 7:device identity in radius server, 8:anonymousIdentity free text, 9:device password in radius server
//setWlanSecurityPEAP_NONE("my_SSID", eapAllowedProtocols, eapAllowedPairwiseCiphers, eapAllowedGroupCiphers, caCertificates, domain, "my_qeedji_device_identity", "my_qeedji_device_anonymousIdentity", "my_qeedji_device_pwd"); // 1:access point ssid, 2:protocol, 3:pairwise cipher, 4:group cipher, 5:radius server CA certificates, 6:domain, 7:device identity in radius server, 8:anonymousIdentity free text, 9:device password in radius server (automatic 2nd phase authentication)
//setWlanSecurityTLS("my_SSID", eapAllowedProtocols, eapAllowedPairwiseCiphers, eapAllowedGroupCiphers, "qeedji_device_identity", caCertificates, domain, pkcs12, "my_p12_password"); // 1:access point ssid, 2:protocol, 3:pairwise cipher, 4:group cipher, 5:identity, 6:radius server CA certificates, 7:domain, 8:client p12 key value (base 64 encoded), 9:password for client p12 key
//setWlanSecurityTTLS_PAP("my_SSID", eapAllowedProtocols, eapAllowedPairwiseCiphers, eapAllowedGroupCiphers, caCertificates, domain, "my_qeedji_device_identity", "my_qeedji_device_anonymousIdentity", "my_qeedji_device_pwd"); // 1:access point ssid, 2:protocol, 3:pairwise cipher, 4:group cipher, 5:radius server CA certificates, 6:domain, 7:device identity in radius server, 8:anonymousIdentity free text, 9:device password in radius server
//setWlanSecurityTTLS_MSCHAP("my_SSID", eapAllowedProtocols, eapAllowedPairwiseCiphers, eapAllowedGroupCiphers, caCertificates, domain, "my_qeedji_device_identity", "my_qeedji_device_anonymousIdentity", "my_qeedji_device_pwd"); // 1:access point ssid, 2:protocol, 3:pairwise cipher, 4:group cipher, 5:radius server CA certificates, 6:domain, 7:device identity in radius server, 8:anonymousIdentity free text, 9:device password in radius server
//setWlanSecurityTTLS_MSCHAPV2("my_SSID", eapAllowedProtocols, eapAllowedPairwiseCiphers, eapAllowedGroupCiphers, caCertificates, domain, "my_qeedji_device_identity", "my_qeedji_device_anonymousIdentity", "my_qeedji_device_pwd"); // 1:access point ssid, 2:protocol, 3:pairwise cipher, 4:group cipher, 5:radius server CA certificates, 6:domain, 7:device identity in radius server, 8:anonymousIdentity free text, 9:device password in radius server
//setWlanSecurityTTLS_GTC("my_SSID", eapAllowedProtocols, eapAllowedPairwiseCiphers, eapAllowedGroupCiphers, caCertificates, domain, "my_qeedji_device_identity", "my_qeedji_device_anonymousIdentity", "my_qeedji_device_pwd"); // 1:access point ssid, 2:protocol, 3:pairwise cipher, 4:group cipher, 5:radius server CA certificates, 6:domain, 7:device identity in radius server, 8:anonymousIdentity free text, 9:device password in radius server
//setWlanSecurityTTLS_NONE("my_SSID", eapAllowedProtocols, eapAllowedPairwiseCiphers, eapAllowedGroupCiphers, caCertificates, domain, "my_qeedji_device_identity", "my_qeedji_device_anonymousIdentity", "my_qeedji_device_pwd"); // 1:access point ssid, 2:protocol, 3:pairwise cipher, 4:group cipher, 5:radius server CA certificates, 6:domain, 7:device identity in radius server, 8:anonymousIdentity free text, 9:device password in radius server (automatic 2nd phase authentication)
//setWlanSecurityPWD("my_SSID", eapAllowedProtocols, eapAllowedPairwiseCiphers, eapAllowedGroupCiphers, "my_qeedji_device_identity", "my_qeedji_device_pwd"); // 1:access point ssid, 2:protocol, 3:pairwise cipher, 4:group cipher, 5:identity, 6:device password in radius server

// ---------------------------------------
// ---- Configuration / Output
// ---------------------------------------

//if (platform === "amp300") {
	//setVideoOuptut("Automatic"); // possible values are "Automatic", "HDMI", "USB-C"
	//setScreenResolution("Automatic"); // possible values are "Automatic", "1920x1080 60Hz SMPTE (1080p)", "1280x720 60Hz CEA-861", "1280x720 50Hz CEA-861", "1280x720 60Hz SONY", "1280x720 60Hz CGV CPLine AV-HD", "1280x720 60Hz SAMSUNG", "1920x1080 60Hz CEA-861", "1920x1080 50Hz CEA-861", "1920x1080 60Hz SMPTE (1080p)", "1920x1080 50Hz SMPTE (1080p)", "1920x1080 60Hz CEA" 
	//setVesaDpmsEnabled(true); // possible values are false, true
	//setScreenRotation(0); // possible values are 0, 90, 180, 270
//}
//if (platform === "amp300") {
	//setAudioOuptut("Automatic"); // possible values are "Automatic", "Video output", "USB Audio"
//}
//if (platform === "tab10") {
	//setAudioOuptut("Automatic"); // possible values are "Automatic", "Internal", "USB Audio"
//}
//setVolumeOfMultimediaContents(15); // possible values are 0 (for 0%) to 15 (for 100%)

// ---------------------------------------
// ---- Configuration / Apps
// ---------------------------------------

// ---- Allows to delete all Apps installed in your AQS desktop: uncomment the line after.
//eraseAllApps();
// ---- Allows to delete only an App installed in your AQS desktop by specifying its applicationId: uncomment the line after and adjust with the applicationId of the App to delete.
//deleteApp("myAppApplicationId"); // ex: "tech.qeedji.tablet.system_button"
// ---- Allows to activate an App installed in your AQS desktop that has been inactivated by specifying its applicationId: uncomment the line after and adjust with the applicationId of the App to activate.
//activateApp("myAppApplicationId"); // ex: "tech.qeedji.tablet.system_button"
// ---- Allows to deactivate an App installed in your AQS desktop by specifying its applicationId: uncomment the line after and adjust with the applicationId of the App to deactivate.
//deactivateApp("myAppApplicationId"); // ex: "tech.qeedji.tablet.system_button"

// ---------------------------------------
// ---- Configuration / Servers
// ---------------------------------------

// ---- Allows to configure the NTP server: uncomment the line after.
//setNtpServer("time.android.com"); // default factory value: time.android.com
// ---- Allows to configure the NTP server timeout: uncomment the line after.
//setNtpTimeout(5000);

// ---------------------------------------
// ---- Configuration / Certificats (2 of 2)
// ---------------------------------------

// Allows to install a certificate in the "User credentials" part and in "trusted CA certificate" of the Android "Encryption & Credentials" menu
// 1) With a text editor (like Notepad++),
//      - open the certificate file (.pem, .crt, ...),
//      - select the content between from -----BEGIN CERTIFICATE----- included to -----END CERTIFICATE----- included,
// 2) Paste then content between the single quote characters
// When done with the configuration script, the certificate is automatically set as CA certificate by AOSP
//-------------------------------------------------------------------------------------------------------
let CACertificate=`-----BEGIN CERTIFICATE-----

-----END CERTIFICATE-----`;
// Uncomment then the following line to install a trusted CA certificate
//setCACertificate("CACertificateName", CACertificate);

//-------------------------------------------------------------------------------------------------------
// Allows to install a certificate in the "User credentials" part of the Android "Encryption & Credentials" menu
// 1) With a text editor (like Notepad++),
//      - open the certificate file (.pem, .crt, ...),
//      - select the content from -----BEGIN CERTIFICATE----- included to -----END CERTIFICATE----- included,
// 2) Paste then the content between the single quote characters
// When using an unsigned certificate, the certificate is not automatically set as CA certificate by AOSP
//-------------------------------------------------------------------------------------------------------
let userCertificate=`-----BEGIN CERTIFICATE-----

-----END CERTIFICATE-----`;
// Uncomment then the following line to install a user credential (user certificate)
//setUserCertificate("userCertificateName", userCertificate);

// ---------------------------------------
// ---- Configuration / Date and time
// ---------------------------------------

// ---- Allows to set the timezone: uncomment the line after.
//setTimezone("Europe/Paris");

// ---- Allows to set date and time
// Fill the string by matching the date format: MMDDhhmmYYYY, MM: Month value, DD: day value, hh: hours value, mm: minutes value, YYYY: year value
// Warning: fill with the wished Coordinated Universal Time (UTC) date&time value
//setUtcTime("123123592020"); // warning: make match the pattern. For example "123123592020" for 31 Dec 2020, 23h59


// ---------------------------------------
// ---- Configuration / Regionality
// ---------------------------------------

// ---- Allows to set the language priority: uncomment the suitable line for your language.
//setSystemLocalLanguages("en-US,fr-FR,it-IT,de-DE,es-ES,ru-RU"); // For en-US in priority
//setSystemLocalLanguages("fr-FR,en-US,it-IT,de-DE,es-ES,ru-RU"); // For fr-FR in priority
//setSystemLocalLanguages("it-IT,en-US,fr-FR,de-DE,es-ES,ru-RU"); // For it-IT in priority
//setSystemLocalLanguages("de-DE,en-US,fr-FR,it-IT,es-ES,ru-RU"); // For de-DE in priority
//setSystemLocalLanguages("es-ES,en-US,fr-FR,it-IT,de-DE,ru-RU"); // For es-ES in priority
//setSystemLocalLanguages("ru-RU,en-US,fr-FR,it-IT,de-DE,es-ES"); // For ru-RU in priority


// ---------------------------------------
// ---- Configuration / Tasks
// ---------------------------------------

// ---- Adapt the rebootCalendar variable with your own calendar (ICS format) according to your need. Set the rebootCalendar variable to `` to erase all the reboot tasks.
let rebootCalendar=`
BEGIN:VCALENDAR
VERSION:1.0
BEGIN:VEVENT
SUMMARY:Reboot task_1
DTSTART:20230101T050000
DTEND:20230101T050005
RRULE:FREQ=WEEKLY;BYDAY=MO,TU,WE,TH,FR,SA,SU;UNTIL=20331231T235959
END:VEVENT
END:VCALENDAR`;
// uncomment the lines below to program the calendar for the reboot task with the rebootCalendar variable defined above																											   
//setRebootCalendar(rebootCalendar);

// ---- Adapt the powerManagerCalendar variable with your own calendar (ICS format) according to your need. Set the powerManagerCalendar variable to `` to erase all the power manager tasks.
let powerManagerCalendar=`
BEGIN:VCALENDAR
VERSION:1.0
BEGIN:VEVENT
SUMMARY:Power manager task_1
X-POWER-MANAGER-LEVEL:MIN
DTSTART:20230101T201500
DTEND:20230102T071500
RRULE:FREQ=WEEKLY;BYDAY=MO,TU,WE,TH,FR,SA,SU;UNTIL=20331231T235959
END:VEVENT
END:VCALENDAR`;
// uncomment the lines below to program the calendar for the power manager task with the powerManagerCalendar variable defined above																															
//setPowerManagerCalendar(powerManagerCalendar);

// ---------------------------------------
// ---- Configuration / Variables
// ---------------------------------------

// ---- Allows to set custom device variables: uncomment the lines according to the variable values to set.
//setSystemDeviceInfoField1("value1");
//setSystemDeviceInfoField2("value2");
//setSystemDeviceInfoField3("value3");
//setSystemDeviceInfoField4("value4");
//setSystemDeviceInfoField5("value5");

// ---------------------------------------
// ---- Maintenance / Test card
// ---------------------------------------

// ---- Allows to activate or not the test card launching for one minute at device start up  : uncomment one of the two lines. When the Test card App is launched is activated, the other App cannot be executed.
//enableTestCardAppLaunching(); 
//disableTestCardAppLaunching();
	
// ---------------------------------------
// ---- Maintenance / Preferences
// ---------------------------------------

// ---- Allows to activate/inactivate support for APK installation from USB mass storage device: uncomment one of the following lines.
//enableExternalStorageCopyApk(); // default factory mode
//disableExternalStorageCopyApk();

// ------ Allows to configure the device mode: native or kiosk: uncomment one of the following lines.
//setDeviceModeNative(); // default factory mode
//setDeviceModeKiosk();

// ---- Allows to activate/inactivate the BlueTooth: uncomment one of the following lines.
//enableBluetooth(); // default factory mode
//disableBluetooth();

// Uncomment this line to set the power manager profile for the power manager task coming for the App 
//setProfileForAppsPowerManagerTasks("min"); // "min": the power manager task programmed by the App is VERY_HIGH_OPTIMIZED ("min" profile), "low": the power manager task coming for the App is VERY_OPTIMIZED ("low" profile)
//setProfileForAppsPowerManagerTasks("low");

// Uncomment this line to set the preferences for the power manager task with `low` profile (HIGH_OPTIMIZED in the Web UI)
//setPreferencesPowerManagerProfileVeryHighlyOptimized("0", false, "0" , "0" , true , false , true , "60" ); // 1: backlight level ["0" to "100" (%)], 2: surround light ["0" surround light Off, "1" surround light On], 3: powermode ["0" black screen, "1" screen on], 4: volume level ["0" to "100" (%)], 5: mute [true: mute, false: unmute], 6: Hid [true: touch screen activated, false: touch screen deactivated], 7: Allow wake up and copy file when Usb storage injection [true: yes, false: no], 8: screen off timeout for screen saver ["10" to "86400" (in seconds)]	

// Uncomment this line to set the preferences for the power manager task with `low` profile (VERY_HIGH_OPTIMIZED in the Web UI)
//setPreferencesPowerManagerProfileHighlyOptimized("50", true, "1" , "40" , false , true , true , "60" ); // 1: backlight level ["0" to "100" (%)], 2: surround light ["0" surround light Off, "1" surround light On], 3: powermode ["0" black screen, "1" screen on], 4: volume ["0" to "100" (%)], 5: mute [true: mute, false: unmute], 6: Hid [true: touch screen activated, false: touch screen deactivated], 7: allow wake up and copy file when Usb storage injection [true: yes, false: no], 8: screen off timeout for screen saver ["10" to "86400" (in seconds)]	

// ---- Allows to activate or deactivate the test card launching by the key sequence [L,R,L,R] pressed in less than ten seconds with an USB keyboard or with a display device remote control (CEC passthrough must be activated as well): uncomment one of the following lines.
//enableTestCardAppLaunchingWithKeySequence(); // default factory value for AMP300
//disableTestCardAppLaunchingWithKeySequence(); // default factory value for TAB10s

if (platform === "amp300") {
	// ---- Allows to activate or deactivate CEC over HDMI feature (CEC passthrough, AV command): uncomment one of the following lines.
	//enableHdmiCec(); // default factory value
	//disableHdmiCec();
	// ---- Allows to activate or deactivate the PowerMode AV command on CEC over HDMI: uncomment one of the following lines.
	//enableHdmiCecPowerMode(); // default factory value
	//disableHdmiCecPowerMode();

	// ---- Allows to activate or deactivate DDC over USB-C: uncomment one of the following lines.
	//enableUsbcDdc();
	//disableUsbcDdc(); // default factory value
	// ---- Allows to activate or deactivate the PowerMode AV commands on DDC over USB-C: uncomment one of the following lines.
	//enableUsbcDdcPowerMode();
	//disableUsbcDdcPowerMode(); // default factory value
	// ---- Allows to activate or deactivate the Brightness AV commands on DDC over USB-C: uncomment one of the following lines.
	//enableUsbcDdcBrightness();
	//disableUsbcDdcBrightness(); // default factory value

	// ---- Allows to configure the level for Power Mode AV command for the Very Highly Optimized profile power manager task: uncomment the following line.
	//setAVCommandPowerModeLevelForVeryHighlyOptimizedProfilePowerManagerTask("0"); // ["0": display device OFF,"1": display device ON], default factory value: "0"
	// ---- Allows to configure the level for the Brightness AV command for the Very Highly Optimized profile power manager task: uncomment the following line.
	//setAVCommandBrightnessLevelForVeryHighlyOptimizedProfilePowerManagerTask("0"); // ["0": brightness 0% to "100": brightness 100%, default factory value: "0"

	// ---- Allows to configure the level for Power mode AV command for the Highly Optimized profile power manager task: uncomment the following line. */
	//setAVCommandPowerModeLevelForHighlyOptimizedProfilePowerManagerTask("1"); //["0": display device OFF,"1": display device ON], default factory value: "1"
	// ---- Allows to configure the level for Brightness AV command for the Highly Optimized profile power manager task: uncomment the following line.
	//setAVCommandBrightnessLevelForHighlyOptimizedProfilePowerManagerTask("80");  //["0": brightness 0% to "100": brightness 100%, default factory value: "80"

	// ---- Allows to configure the brightness level for Brightness AV command in nominal mode: uncomment the following line.
	//setAVCommandBrightnessLevelForNominalMode("99"); // ["0": brightness 0% to "100": brightness 100%, default factory value: "100"
}

if (platform === "tab10") {
	
	// ---- Allows to activate/inactivate the Rfid125KHz sensor for TAB10s device: uncomment one of the following lines.
	//enableRfid125KHz(); // default factory mode
	//disableRfid125KHz();

	// ------ Allows to configure the proximity sensor distance threshold in centimeters for TAB10s device: uncomment one of the following lines.
	//setProximitySensorMaxDistance(50); 
	//setProximitySensorMaxDistance(100);
	//setProximitySensorMaxDistance(150); 
	//setProximitySensorMaxDistance(200); // default factory mode
	//setProximitySensorMaxDistance(250);
	//setProximitySensorMaxDistance(300);
	//setProximitySensorMaxDistance(350);
	//setProximitySensorMaxDistance(400);
	//setProximitySensorMaxDistance(450);
	//setProximitySensorMaxDistance(500);
	//setProximitySensorMaxDistance(550);
	//setProximitySensorMaxDistance(600);
}

// ------ Allows to grant as system App an exhaustive list of APK whose ApplicationID in listed in the variable xmlSignedFileData. // Uncomment the two following lines
//let xmlSignedFileData = `<?xml version="1.0"?><AppList>...`; // The xmlSignedFileData variable must contain the entire content of the app-list-signed.xml generated with the AQS-setAppAsSystemApp. For further information, read the developer manual. 
//setAppAsSystemApp(xmlSignedFileData);

// ------ Test function example to show, thanks to a device getter, a device information (e.g.: software version) in a temporary popup for few second when installing the .js configuration script
//var strings = new Array("");
//strings.push("OS : " + getSoftwareVersion() + "\n");
//showLongToast(strings.join(""));

/** --------------------------------------
 * ---------------------------------------
 * ---- END of the user configuration
 * ---------------------------------------
 * ---------------------------------------
 */


/** --------------------------------------
 * ---- Functions section
 * ---------------------------------------
 */

/* Functions to check compatibility */
function checkCompatibility() {
	if (typeof Android !== "undefined") {
		return true;
	}
	return false;
}

/* Functions to get platform */
function getPlatform() {
	return Android.SystemProperties().getString("ro.build.product");
}

/* Debug functions */
/** duration 4 seconds */
function showToast(toast) {
	Android.showToast(toast);
}
/** duration 7 seconds */
function showLongToast(toast) {
	Android.showLongToast(toast);
}

/* Functions to get AOSP firmware version */
function getDeliverySoftwareVersion() {
	return Android.SystemProperties().getString("persist.sys.delivery-software-version");
}
/* Functions to get uBoot version */
function getUBootVersion() {
	return Android.SystemProperties().getString("ro.uboot.version");
}
/* Functions to set/unset test card */
function enableTestCardAppLaunching() {
	Android.SystemProperties().setBoolean("persist.sys.testcard.start_after_boot_completed", true); 
}
function disableTestCardAppLaunching() {
	Android.SystemProperties().setBoolean("persist.sys.testcard.start_after_boot_completed", false);
}

function enableTestCardAppLaunchingWithKeySequence() {
	Android.SystemProperties().setBoolean("persist.sys.testcard.key-event.all.authorized", true); 
}
function disableTestCardAppLaunchingWithKeySequence() {
	Android.SystemProperties().setBoolean("persist.sys.testcard.key-event.all.authorized", false);
}

/* Functions to activate CEC or the PowerMode AV command on CEC over HDMI */
function enableHdmiCec() {
	Android.SystemProperties().setBoolean("persist.sys.av-cmd@tv.cec_1.hdmi_1.all.authorized", true); 
}
function disableHdmiCec() {
	Android.SystemProperties().setBoolean("persist.sys.av-cmd@tv.cec_1.hdmi_1.all.authorized", false);
}
function enableHdmiCecPowerMode() {
	Android.SystemProperties().setBoolean("persist.sys.av-cmd@tv.cec_1.hdmi_1.all.authorized", true); 
	Android.SystemProperties().setBoolean("persist.sys.av-cmd@tv.cec_1.hdmi_1.all.features.power-mode", true); 
}
function disableHdmiCecPowerMode() {
	Android.SystemProperties().setBoolean("persist.sys.av-cmd@tv.cec_1.hdmi_1.all.features.power-mode", false);
}

/* Functions to activate PowerMode and Brightness AV commands on DDC over USB-C */
function enableUsbcDdc() {
	Android.SystemProperties().setBoolean("persist.sys.av-cmd.i2c_2.usbc_1.all.authorized", true); 
}
function disableUsbcDdc() {
	Android.SystemProperties().setBoolean("persist.sys.av-cmd.i2c_2.usbc_1.all.authorized", false);
}
function enableUsbcDdcPowerMode() {
	Android.SystemProperties().setBoolean("persist.sys.av-cmd.i2c_2.usbc_1.all.authorized", true); 
	Android.SystemProperties().setBoolean("persist.sys.av-cmd.i2c_2.usbc_1.all.features.power-mode", true); 
}
function disableUsbcDdcPowerMode() {
	Android.SystemProperties().setBoolean("persist.sys.av-cmd.i2c_2.usbc_1.all.features.power-mode", false);
}
function enableUsbcDdcBrightness() {
	Android.SystemProperties().setBoolean("persist.sys.av-cmd.i2c_2.usbc_1.all.authorized", true); 
	Android.SystemProperties().setBoolean("persist.sys.av-cmd.i2c_2.usbc_1.all.features.brightness", true);
}
function disableUsbcDdcBrightness() {
	Android.SystemProperties().setBoolean("persist.sys.av-cmd.i2c_2.usbc_1.all.features.brightness", false);
}

/* Functions to configure the brightness level and power mode level for the Very Highly Optimized profile power manager task */
function setAVCommandPowerModeLevelForVeryHighlyOptimizedProfilePowerManagerTask(value) {
	Android.SystemProperties().setString("persist.sys.power-manager.level.min.av-cmd.power-mode", value);
}
function setAVCommandBrightnessLevelForVeryHighlyOptimizedProfilePowerManagerTask(value) {
	Android.SystemProperties().setString("persist.sys.power-manager.level.min.av-cmd.brightness", value);
}

/* Functions to configure the brightness level and power mode level for the Highly Optimized profile power manager task */
function setAVCommandPowerModeLevelForHighlyOptimizedProfilePowerManagerTask(value) {
	Android.SystemProperties().setString("persist.sys.power-manager.level.low.av-cmd.power-mode", value);
}
function setAVCommandBrightnessLevelForHighlyOptimizedProfilePowerManagerTask(value) {
	Android.SystemProperties().setString("persist.sys.power-manager.level.low.av-cmd.brightness", value);
}

/* Functions to configure the brightness level in nominal mode */
function setAVCommandBrightnessLevelForNominalMode(value) {
	Android.SystemProperties().setString("persist.sys.power-manager.level.none.av-cmd.brightness", value);
}
	
/* Functions to set/get timezone value */
function getTimezone() {
	return Android.SystemProperties().getString("persist.sys.timezone");
}
function setTimezone(m) {
	Android.SystemProperties().setString("persist.sys.timezone", m);
}
function setDefaultTimezone() {
	Android.SystemProperties().setString("persist.sys.timezone", "GMT");
}
/* Functions to handle the activatione ofthe feature `APK upgrade from USB storage device` */
function getExternalStorageCopyApk() {
	return Android.Preferences("SharedPreferences", "tech.qeedji.system.app").getBoolean("externalstorage.copy.apk.enabled", false);
}
function enableExternalStorageCopyApk() {
	Android.Preferences("SharedPreferences", "tech.qeedji.system.app").setBoolean("externalstorage.copy.apk.enabled", true); 
}
function disableExternalStorageCopyApk() {
	Android.Preferences("SharedPreferences", "tech.qeedji.system.app").setBoolean("externalstorage.copy.apk.enabled", false);
}

/* Functions to handle the device mode `native`, `kiosk` */
function getDeviceMode() {
	return Android.SystemProperties().getString("persist.sys.device_mode");
}
function setDeviceModeKiosk() {
	Android.SystemProperties().setString("persist.sys.device_mode", "kiosk");
}
function setDeviceModeNative() {
	Android.SystemProperties().setString("persist.sys.device_mode", "native"); 
}

/* Functions to handle Bluetooth */
function getBluetooth() {
	return Android.Preferences("Settings", "Global").getInt("bluetooth_on", 0);
}
function enableBluetooth() {
	Android.Preferences("Settings", "Global").setInt("bluetooth_on", 1);
}
function disableBluetooth() {
	Android.Preferences("Settings", "Global").setInt("bluetooth_on", 0);
}

/* Functions to handle Wifi */
function getWifi() {
	return Android.Preferences("Settings", "Global").getInt("wifi_on", 0);
}
function enableWlan() {
	Android.Preferences("Settings", "Global").setInt("wifi_on", 1);
}
function disableWlan() {
	Android.Preferences("Settings", "Global").setInt("wifi_on", 0);
}

/* Functions to handle Rfid 125KHz */
function getRfid125KHz() {
	return Android.SystemProperties().getBoolean("persist.sys.rfid125khz.enable", false);
}
function enableRfid125KHz() {
	Android.SystemProperties().setBoolean("persist.sys.rfid125khz.enable", true); 
}
function disableRfid125KHz() {
	Android.SystemProperties().setBoolean("persist.sys.rfid125khz.enable", false);
}

/* Functions to handle proximity sensor */
function getProximitySensorType() {
	return Android.SystemProperties().getString("persist.sys.proximity_sensor.type");
}
function setProximitySensorTypeRadar() {
	Android.SystemProperties().setString("persist.sys.proximity_sensor.type", "radar");
}
function setProximitySensorTypeIR() {
	Android.SystemProperties().setString("persist.sys.proximity_sensor.type", "ir");
}
function getProximitySensorMaxDistance() {
	return Android.SystemProperties().getString("persist.sys.proximity_sensor.max_distance"); 
}
function setProximitySensorMaxDistance(maxDistance) {
	Android.SystemProperties().setString("persist.sys.proximity_sensor.max_distance", maxDistance);
}

/* Functions to handle device name */
function getDeviceName() {
	return Android.Preferences("Settings", "Global").getString("device_name", "");
}
function setDeviceName(deviceName) {
	Android.Preferences("Settings", "Global").setString("device_name", deviceName);
}

/* Functions to handle hostname */
function getHostname() {
	return Android.SystemProperties().getString("persist.sys.hostname");
}
function setHostname(hostname) {
	Android.SystemProperties().setString("persist.sys.hostname", hostname);
	Android.SystemProperties().setBoolean("persist.sys.hostname.enabled", true);
}

function clearHostname() {
	Android.SystemProperties().setString("persist.sys.hostname", "");
	Android.SystemProperties().setBoolean("persist.sys.hostname.enabled", false);
}

/* Functions to handle webserver */
function getWebserverHttpPort() {
	return Android.SystemProperties().getString("persist.sys.webserver.http.port");
}
function setWebserverHttpPort(port) {
	Android.SystemProperties().setString("persist.sys.webserver.http.port", port);
}
function setWebserverCredentialUserPasswordCustom(credentialLabel, username, password) {
	var un = credentialLabel + ".username";
	Android.Preferences("SharedPreferences", "tech.qeedji.webserver.app", "credentials").setString(un, username);
	var pw = credentialLabel + ".password";
	Android.Preferences("SharedPreferences", "tech.qeedji.webserver.app", "credentials").setString(pw, password);
	var typ = credentialLabel + ".type";
	Android.Preferences("SharedPreferences", "tech.qeedji.webserver.app", "credentials").setString(typ, "user-password");
}
function setWebserverCredentialUserPasswordAdmin(username, password) {
	var un = "default" + ".username";
	Android.Preferences("SharedPreferences", "tech.qeedji.webserver.app", "credentials").setString(un, username);
	var pw = "default" + ".password";
	Android.Preferences("SharedPreferences", "tech.qeedji.webserver.app", "credentials").setString(pw, password);
	var typ = "default" + ".type";
	Android.Preferences("SharedPreferences", "tech.qeedji.webserver.app", "credentials").setString(typ, "user-password");
}
function setWebserverCredentialAdministrationUserAdmin() {
	Android.SystemProperties().setString("persist.sys.webserver.webuiadmin.credential", "default");
}
function setWebserverCredentialAdministrationUserCustom(credentialLabel) {
	Android.SystemProperties().setString("persist.sys.webserver.webuiadmin.credential", credentialLabel);
}
function setWebserverCredentialAdministrationWebServiceAdmin() {
	Android.SystemProperties().setString("persist.sys.webserver.webservice.credential", "default");
}
function setWebserverCredentialAdministrationWebServiceCustom(credentialLabel) {
	Android.SystemProperties().setString("persist.sys.webserver.webservice.credential", credentialLabel);
}
function setWebserverCredentialApplicationWebServiceAdmin() {
	Android.SystemProperties().setString("persist.sys.webserver.webserviceappli.credential", "default");
}
function setWebserverCredentialApplicationWebServiceCustom(credentialLabel) {
	Android.SystemProperties().setString("persist.sys.webserver.webserviceappli.credential", credentialLabel);
}
function setWebserverCredentialApplicationUserAdmin() {
	Android.SystemProperties().setString("persist.sys.webserver.webuiappli.credential", "default");
}
function setWebserverCredentialApplicationUserCustom(credentialLabel) {
	Android.SystemProperties().setString("persist.sys.webserver.webuiappli.credential", credentialLabel);
}
function setWebserverCredentialPublishingSoftwareAdmin() {
	Android.SystemProperties().setString("persist.sys.webserver.webdav.credential", "default");
}
function setWebserverCredentialPublishingSoftwareCustom(credentialLabel) {
	Android.SystemProperties().setString("persist.sys.webserver.webdav.credential", credentialLabel);
}
/* Functions to handle locales */
function getSystemLocalLanguages() {
	return Android.Preferences("Settings", "system").getString("system_locales", "");
}
function setSystemLocalLanguages(locales) {
	if (typeof locales === "string" && locales.length > 0) {
		const locale = locales.split(',');
		Android.SystemProperties().setString("persist.sys.locale", locale[0]);
	}
	Android.Preferences("Settings", "system").setString("system_locales", locales);
}

/* Functions to handle Display Output */
function setVideoOuptut(output) {
	if (output === "Automatic") {
		Android.DisplayOutput().setPortType(0);
		Android.DisplayOutput().setAutoPortType(true);
	} else if (output === "HDMI") {
		Android.DisplayOutput().setPortType(8);
		Android.DisplayOutput().setAutoPortType(false);
	} else if (output === "USB-C") {
		Android.DisplayOutput().setPortType(11);
		Android.DisplayOutput().setAutoPortType(false);
	}
}
function setScreenResolution(labelMode) {
	if (labelMode === "Automatic") {
		Android.DisplayOutput().setAutoDisplayMode(true);
	} else {
		Android.DisplayOutput().setDisplayMode(labelMode);
		Android.DisplayOutput().setAutoDisplayMode(false);
	}
}
function setVesaDpmsEnabled(dmps) {
	Android.DisplayOutput().setDpmsPowerModeEnabled(dmps);
}
function setScreenRotation(rotation) {
	Android.DisplayOutput().setRotation(rotation);
}

/* Functions to handle Sound Output */
function setAudioOuptut(output) {
	if (output === "Automatic") {
		Android.SoundOutput().setPortType(0);
	} else if (output === "Video output") {
		Android.SoundOutput().setPortType(1);
	} else if (output === "Internal") {
		Android.SoundOutput().setPortType(2);
	} else if (output === "USB Audio") {
		Android.SoundOutput().setPortType(3);
	}
}
function setVolumeOfMultimediaContents(volume) {
	Android.Preferences("Settings", "System").setInt("volume_music_speaker", volume);
}

/* Functions to handle apps */
function eraseAllApps() {
	Android.PackageManager().eraseAllApps();
}
function deleteApp(package_id) {
	Android.PackageManager().deleteApp(package_id);
}
function activateApp(package_id) {
	Android.PackageManager().activateApp(package_id);
}
function deactivateApp(package_id) {
	Android.PackageManager().deactivateApp(package_id);
}

/* Function to set preferred NTP server */
function setNtpServer(ntp_server) {
	Android.Preferences("Settings", "Global").setString("ntp_server", ntp_server);
}
/* Function to set the timeout in milliseconds to wait for NTP server */
function setNtpTimeout(ntp_timeout) {
	Android.Preferences("Settings", "Global").setLong("ntp_timeout", ntp_timeout);
}

/* Function to set reboot calendar */
function setRebootCalendar(calendar) {
	Android.Preferences("Settings", "Secure").setString("reboot_calendar", calendar);
}

/* Function to set power manager calendar */
function setPowerManagerCalendar(calendar) {
	Android.Preferences("Settings", "Secure").setString("power_manager_calendar", calendar);
}

/* Functions to set field[1-5] */
function setSystemDeviceInfoField1(value) {
	Android.SystemProperties().setString("persist.sys.device_info.field1", value);
}
function setSystemDeviceInfoField2(value) {
	Android.SystemProperties().setString("persist.sys.device_info.field2", value);
}
function setSystemDeviceInfoField3(value) {
	Android.SystemProperties().setString("persist.sys.device_info.field3", value);
}
function setSystemDeviceInfoField4(value) {
	Android.SystemProperties().setString("persist.sys.device_info.field4", value);
}
function setSystemDeviceInfoField5(value) {
	Android.SystemProperties().setString("persist.sys.device_info.field5", value);
}

/* Function to set LAN by DHCP */
function setLanByDhcp() {
	var ipConfiguration = Android.IpConfiguration(1, null, 0, null);
	deleteAllLanConfig();
	Android.EthernetManager().setConfiguration("eth0", ipConfiguration);
}

/* Function to set LAN IP Address */
function setLanIpAddress(address, netmask, gateway, dns1, dns2) {
	var dnsServers = null;
	if ( (dns1 !== null) && (dns2 !== null) ) {
		dnsServers = [dns1, dns2];
	} else if (dns1 !== null) {
		dnsServers = [dns1];
	} else if (dns2 !== null) {
		dnsServers = [dns2];
	}
	var staticIpConfiguration = Android.StaticIpConfiguration(address, netmask, gateway, dnsServers, null);
	var ipConfiguration = Android.IpConfiguration(0, staticIpConfiguration, 0, null);
	deleteAllLanConfig();
	Android.EthernetManager().setConfiguration("eth0", ipConfiguration);
}

/* Function to set LAN Proxy */
function setLanProxy(host, port, parsedExclList) {
		var ethManager = Android.EthernetManager();
	var ethConfig = ethManager.getConfiguredNetwork(0);
	var ipConfiguration = ethConfig.getIpConfiguration();
	var proxyInfo = Android.ProxyInfo(host, port, parsedExclList);
	ipConfiguration.setProxySettings(1);
	ipConfiguration.setHttpProxy(proxyInfo);
	ethConfig.setIpConfiguration(ipConfiguration);
	Android.EthernetManager().save(ethConfig);
}

/* Function to set LAN Proxy with credential user/password */
function setLanProxyUserPassword(host, port, parsedExclList, username, pwd) {
	var ethManager = Android.EthernetManager();
	var ethConfig = ethManager.getConfiguredNetwork(0);
	var ipConfiguration = ethConfig.getIpConfiguration();
	var credential = Android.ProxyInfoCredentialUserPassword(username, pwd);
	var proxyInfo = Android.ProxyInfo(host, port, parsedExclList, 1, credential);
	ipConfiguration.setProxySettings(1);
	ipConfiguration.setHttpProxy(proxyInfo);
	ethConfig.setIpConfiguration(ipConfiguration);
	Android.EthernetManager().save(ethConfig);
}

/* Function to set LAN Proxy PAC */
function setLanProxyPAC(pac, port) {
	var ethManager = Android.EthernetManager();
	var ethConfig = ethManager.getConfiguredNetwork(0);
	var ipConfiguration = ethConfig.getIpConfiguration();
	var proxyInfo = Android.ProxyInfo(pac, port);
	ipConfiguration.setProxySettings(3);
	ipConfiguration.setHttpProxy(proxyInfo);
	ethConfig.setIpConfiguration(ipConfiguration);
	Android.EthernetManager().save(ethConfig);
}

/* Function to delete LAN Proxy */
function deleteLanProxy() {
	var ethManager = Android.EthernetManager();
	var ethConfig = ethManager.getConfiguredNetwork(0);
	var ipConfiguration = ethConfig.getIpConfiguration();
	ipConfiguration.setProxySettings(0);
	ipConfiguration.setHttpProxy(null);
	ethConfig.setIpConfiguration(ipConfiguration);
	Android.EthernetManager().save(ethConfig);
}
/* Functions to set LAN 802.1X Security */
function setLanSecurityGeneric1(eapMethod, identity, pwd) {
	var ipConfiguration = Android.EthernetManager().getConfiguration("eth0");
	var allowedKeyManagement = ["IEEE8021X"];
	var ethernet8021XConfig = Android.Ethernet8021XConfig();
	ethernet8021XConfig.setEapMethod(eapMethod);
	ethernet8021XConfig.setIdentity(identity);
	ethernet8021XConfig.setPassword(pwd);
	var ethConfig = Android.EthernetConfiguration(0, "eth0", allowedKeyManagement, ethernet8021XConfig, ipConfiguration);
	deleteAllLanConfig();
	Android.EthernetManager().save(ethConfig);
}

function setLanSecurityGeneric2(eapMethod, phase2Method, caCertificates, identity, anonymousIdentity, pwd) {
	var ipConfiguration = Android.EthernetManager().getConfiguration("eth0");
	var allowedKeyManagement = ["IEEE8021X"];
	var ethernet8021XConfig = Android.Ethernet8021XConfig();
	ethernet8021XConfig.setEapMethod(eapMethod);
	ethernet8021XConfig.setPhase2Method(phase2Method);
	ethernet8021XConfig.setCaCertificates(caCertificates);
	ethernet8021XConfig.setAnonymousIdentity(anonymousIdentity);
	ethernet8021XConfig.setIdentity(identity);
	ethernet8021XConfig.setPassword(pwd);
	var ethConfig = Android.EthernetConfiguration(0, "eth0", allowedKeyManagement, ethernet8021XConfig, ipConfiguration);
	deleteAllLanConfig();
	Android.EthernetManager().save(ethConfig);
}

function setLanSecurityPEAP(phase2Method, caCertificates, identity, anonymousIdentity, pwd) {
	setLanSecurityGeneric2(0, phase2Method, caCertificates, identity, anonymousIdentity, pwd);
}
function setLanSecurityPEAP_NONE(caCertificates, identity, anonymousIdentity, pwd) {
	setLanSecurityPEAP(0, caCertificates, identity, anonymousIdentity, pwd);
}
function setLanSecurityPEAP_MSCHAPV2(caCertificates, identity, anonymousIdentity, pwd) {
	setLanSecurityPEAP(3, caCertificates, identity, anonymousIdentity, pwd);
}
function setLanSecurityPEAP_GTC(caCertificates, identity, anonymousIdentity, pwd) {
	setLanSecurityPEAP(4, caCertificates, identity, anonymousIdentity, pwd);
}
function setLanSecurityPEAP_MD5(caCertificates, identity, anonymousIdentity, pwd) {
	setLanSecurityPEAP(8, caCertificates, identity, anonymousIdentity, pwd);
}

function setLanSecurityTLS(identity, caCertificates, clientPkcs12, pwd) {
	var ipConfiguration = Android.EthernetManager().getConfiguration("eth0");
	var allowedKeyManagement = ["IEEE8021X"];
	var ethernet8021XConfig = Android.Ethernet8021XConfig();
	ethernet8021XConfig.setEapMethod(1);
	ethernet8021XConfig.setCaCertificates(caCertificates);
	ethernet8021XConfig.setClientPkcs12(clientPkcs12, pwd);
	ethernet8021XConfig.setIdentity(identity);
	var ethConfig = Android.EthernetConfiguration(0, "eth0", allowedKeyManagement, ethernet8021XConfig, ipConfiguration);
	deleteAllLanConfig();
	Android.EthernetManager().save(ethConfig);
}

function setLanSecurityTTLS(phase2Method, caCertificates, identity, anonymousIdentity, pwd) {
	setLanSecurityGeneric2(2, phase2Method, caCertificates, identity, anonymousIdentity, pwd);
}
function setLanSecurityTTLS_NONE(caCertificates, identity, anonymousIdentity, pwd) {
	setLanSecurityTTLS(0, caCertificates, identity, anonymousIdentity, pwd);
}
function setLanSecurityTTLS_PAP(caCertificates, identity, anonymousIdentity, pwd) {
	setLanSecurityTTLS(1, caCertificates, identity, anonymousIdentity, pwd);
}
function setLanSecurityTTLS_MSCHAP(caCertificates, identity, anonymousIdentity, pwd) {
	setLanSecurityTTLS(2, caCertificates, identity, anonymousIdentity, pwd);
}
function setLanSecurityTTLS_MSCHAPV2(caCertificates, identity, anonymousIdentity, pwd) {
	setLanSecurityTTLS(3, caCertificates, identity, anonymousIdentity, pwd);
}
function setLanSecurityTTLS_CHAP(caCertificates, identity, anonymousIdentity, pwd) {
	setLanSecurityTTLS(9, caCertificates, identity, anonymousIdentity, pwd);
}
function setLanSecurityTTLS_GTC(caCertificates, identity, anonymousIdentity, pwd) {
	setLanSecurityTTLS(4, caCertificates, identity, anonymousIdentity, pwd);
}
function setLanSecurityTTLS_MD5(caCertificates, identity, anonymousIdentity, pwd) {
	setLanSecurityTTLS(8, caCertificates, identity, anonymousIdentity, pwd);
}
function setLanSecurityTTLS_EAP_MSCHAPV2(caCertificates, identity, anonymousIdentity, pwd) {
	setLanSecurityTTLS(10, caCertificates, identity, anonymousIdentity, pwd);
}
function setLanSecurityTTLS_TLS(identity, caCertificates, clientPkcs12, pwd) {
	var ipConfiguration = Android.EthernetManager().getConfiguration("eth0");
	var allowedKeyManagement = ["IEEE8021X"];
	var ethernet8021XConfig = Android.Ethernet8021XConfig();
	ethernet8021XConfig.setEapMethod(2);
	ethernet8021XConfig.setPhase2Method(11);
	ethernet8021XConfig.setCaCertificates(caCertificates);
	ethernet8021XConfig.setClientPkcs12(clientPkcs12, pwd);
	ethernet8021XConfig.setIdentity(identity);
	var ethConfig = Android.EthernetConfiguration(0, "eth0", allowedKeyManagement, ethernet8021XConfig, ipConfiguration);
	deleteAllLanConfig();
	Android.EthernetManager().save(ethConfig);
}

function setLanSecurityPWD(identity, pwd) {
	setLanSecurityGeneric1(3, identity, pwd);
}
function setLanSecurityMD5(identity, pwd) {
	setLanSecurityGeneric1(8, identity, pwd);
}
function setLanSecurityGTC(identity, pwd) {
	setLanSecurityGeneric1(9, identity, pwd);
}
function setLanSecurityMSCHAPV2(identity, pwd) {
	setLanSecurityGeneric1(10, identity, pwd);
}

function deleteAllLanConfig() {
	var ethManager = Android.EthernetManager();
	var length = ethManager.getConfiguredNetworksLength();
	for (let i = 0; i < length; i++) {
		var ethConfig = ethManager.getConfiguredNetwork(0);
		ethManager.forget(ethConfig.getNetworkId());
	}
}

/* Function to set WLAN_1 by DHCP */
function setWlanByDhcp(ssid, hiddenSSID) {
	var ipConfiguration = Android.IpConfiguration(1, null, 0, null);
	var allowedKeyManagement = ["NONE"];
	var wifiConfiguration = Android.WifiConfiguration(0, ssid, null, null, null, 0, hiddenSSID, allowedKeyManagement, null, null, null, null, null, null, null, false, null, ipConfiguration);
	deleteAllWlanConfig();
	Android.WifiManager().save(wifiConfiguration);
}

/* Function to set WLAN_1 IP Address */
function setWlanIpAddress(ssid, hiddenSSID, address, netmask, gateway, dns1, dns2) {
	var dnsServers = null;
	if ( (dns1 !== null) && (dns2 !== null) ) {
		dnsServers = [dns1, dns2];
	} else if (dns1 !== null) {
		dnsServers = [dns1];
	} else if (dns2 !== null) {
		dnsServers = [dns2];
	}
	var allowedKeyManagement = ["NONE"];								 
	var staticIpConfiguration = Android.StaticIpConfiguration(address, netmask, gateway, dnsServers, null);
	var ipConfiguration = Android.IpConfiguration(0, staticIpConfiguration, 0, null);
	var wifiConfiguration = Android.WifiConfiguration(0, ssid, null, null, null, 0, hiddenSSID, allowedKeyManagement, null, null, null, null, null, null, null, false, null, ipConfiguration);
	deleteAllWlanConfig();
	Android.WifiManager().save(wifiConfiguration);
}

/* Function to set WLAN_1 Proxy */
function setWlanProxy(ssid, host, port, parsedExclList) {
	var wifiConfiguration = getWlanConfiguration(ssid);
	var ipConfiguration = wifiConfiguration.getIpConfiguration();
	var proxyInfo = Android.ProxyInfo(host, port, parsedExclList);
	ipConfiguration.setProxySettings(1);
	ipConfiguration.setHttpProxy(proxyInfo);
	wifiConfiguration.setIpConfiguration(ipConfiguration);
					   
	Android.WifiManager().save(wifiConfiguration);
}

/* Function to set WLAN_1 Proxy with credential user/password */
function setWlanProxyUserPassword(ssid, host, port, parsedExclList, username, pwd) {
	var wifiConfiguration = getWlanConfiguration(ssid);
	var ipConfiguration = wifiConfiguration.getIpConfiguration();
	var credential = Android.ProxyInfoCredentialUserPassword(username, pwd);
	var proxyInfo = Android.ProxyInfo(host, port, parsedExclList, 1, credential);
	ipConfiguration.setProxySettings(1);
	ipConfiguration.setHttpProxy(proxyInfo);
	wifiConfiguration.setIpConfiguration(ipConfiguration);
					   
	Android.WifiManager().save(wifiConfiguration);										   
}

/* Function to delete WLAN_1 Proxy */
function deleteWlanProxy(ssid) {
	var wifiConfiguration = getWlanConfiguration(ssid);
	var ipConfiguration = wifiConfiguration.getIpConfiguration();
	ipConfiguration.setProxySettings(0);
	ipConfiguration.setHttpProxy(null);
	wifiConfiguration.setIpConfiguration(ipConfiguration);
					   
	Android.WifiManager().save(wifiConfiguration);
}

/* Function to set WLAN_1 Proxy PAC */
function setWlanProxyPAC(ssid, pac, port) {
	var wifiConfiguration = getWlanConfiguration(ssid);
	var ipConfiguration = wifiConfiguration.getIpConfiguration();
	var proxyInfo = Android.ProxyInfo(pac, port);
	ipConfiguration.setProxySettings(3);
	ipConfiguration.setHttpProxy(proxyInfo);
	wifiConfiguration.setIpConfiguration(ipConfiguration);
					   
	Android.WifiManager().save(wifiConfiguration);										   
}


/* Functions to set WLAN_1 Security */
function setWlanSecurityWep(ssid, wepKey) {
	var allowedKeyManagement = ["NONE"];
	var allowedAuthAlgorithms = ["OPEN", "SHARED"];
	var wepKeys = [wepKey];
	var wifiConfiguration = getWlanConfiguration(ssid);
	wifiConfiguration.setAllowedKeyManagement(allowedKeyManagement);
	wifiConfiguration.setAllowedAuthAlgorithms(allowedAuthAlgorithms);
	wifiConfiguration.setWepKeys(wepKeys);
	deleteAllWlanConfig();
	Android.WifiManager().save(wifiConfiguration);
	Android.WifiManager().connect(wifiConfiguration, true);
}

function setWlanSecurityPsk(ssid, key, allowedProtocols, pairwiseCiphers, allowedGroupCiphers) {
	var allowedKeyManagement = ["WPA_PSK"];
	var wifiConfiguration = getWlanConfiguration(ssid);
	wifiConfiguration.setAllowedKeyManagement(allowedKeyManagement);
	wifiConfiguration.setAllowedProtocols(allowedProtocols);
	wifiConfiguration.setPreSharedKey(key);
	wifiConfiguration.setAllowedPairwiseCiphers(pairwiseCiphers);
	wifiConfiguration.setAllowedGroupCiphers(allowedGroupCiphers);
	deleteAllWlanConfig();
	Android.WifiManager().save(wifiConfiguration);
	Android.WifiManager().connect(wifiConfiguration, true);
}

function setWlanSecurityCaCertificates(wifiEnterpriseConfig, caCertificates, domain) {
	if (domain !== null) {
		wifiEnterpriseConfig.setDomainSuffixMatch(domain);
		wifiEnterpriseConfig.setCaPath("/system/etc/security/cacerts");
	} else if (caCertificates !== null) {
		wifiEnterpriseConfig.setCaCertificates(caCertificates);
	}
}

function setWlanSecurityGeneric(ssid, eapMethod, phase2Method, allowedProtocols, pairwiseCiphers, allowedGroupCiphers, caCertificates, domain, identity, anonymousIdentity, pwd) {
	var allowedKeyManagement = ["WPA_EAP", "IEEE8021X"];
	var wifiEnterpriseConfig = Android.WifiEnterpriseConfig();
	wifiEnterpriseConfig.setEapMethod(eapMethod);
	wifiEnterpriseConfig.setPhase2Method(phase2Method);
	setWlanSecurityCaCertificates(wifiEnterpriseConfig, caCertificates, domain);
	wifiEnterpriseConfig.setIdentity(identity);
	wifiEnterpriseConfig.setAnonymousIdentity(anonymousIdentity);
	wifiEnterpriseConfig.setPassword(pwd);
	var wifiConfiguration = getWlanConfiguration(ssid);
	wifiConfiguration.setAllowedKeyManagement(allowedKeyManagement);
	wifiConfiguration.setAllowedProtocols(allowedProtocols);
	wifiConfiguration.setAllowedPairwiseCiphers(pairwiseCiphers);
	wifiConfiguration.setAllowedGroupCiphers(allowedGroupCiphers);
	wifiConfiguration.setWifiEnterpriseConfig(wifiEnterpriseConfig);
	deleteAllWlanConfig();
	Android.WifiManager().save(wifiConfiguration);
	Android.WifiManager().connect(wifiConfiguration, true);
}

function setWlanSecurityPEAP(ssid, phase2Method, allowedProtocols, pairwiseCiphers, allowedGroupCiphers, caCertificates, domain, identity, anonymousIdentity, pwd) {
	setWlanSecurityGeneric(ssid, 0, phase2Method, allowedProtocols, pairwiseCiphers, allowedGroupCiphers, caCertificates, domain, identity, anonymousIdentity, pwd);
}
function setWlanSecurityPEAP_NONE(ssid, allowedProtocols, pairwiseCiphers, allowedGroupCiphers, caCertificates, domain, identity, anonymousIdentity, pwd) {
	setWlanSecurityPEAP(ssid, 0, allowedProtocols, pairwiseCiphers, allowedGroupCiphers, caCertificates, domain, identity, anonymousIdentity, pwd);
}
function setWlanSecurityPEAP_MSCHAPV2(ssid, allowedProtocols, pairwiseCiphers, allowedGroupCiphers, caCertificates, domain, identity, anonymousIdentity, pwd) {
	setWlanSecurityPEAP(ssid, 3, allowedProtocols, pairwiseCiphers, allowedGroupCiphers, caCertificates, domain, identity, anonymousIdentity, pwd);
}
function setWlanSecurityPEAP_GTC(ssid, allowedProtocols, pairwiseCiphers, allowedGroupCiphers, caCertificates, domain, identity, anonymousIdentity, pwd) {
	setWlanSecurityPEAP(ssid, 4, allowedProtocols, pairwiseCiphers, allowedGroupCiphers, caCertificates, domain, identity, anonymousIdentity, pwd);
}

function setWlanSecurityTLS(ssid, allowedProtocols, pairwiseCiphers, allowedGroupCiphers, identity, caCertificates, domain, clientPkcs12, pwd) {
	var allowedKeyManagement = ["WPA_EAP", "IEEE8021X"];
	var wifiEnterpriseConfig = Android.WifiEnterpriseConfig();
	wifiEnterpriseConfig.setEapMethod(1);
	wifiEnterpriseConfig.setPhase2Method(0);
	setWlanSecurityCaCertificates(wifiEnterpriseConfig, caCertificates, domain);
	wifiEnterpriseConfig.setIdentity(identity);
	wifiEnterpriseConfig.setClientPkcs12(clientPkcs12, pwd);
	var wifiConfiguration = getWlanConfiguration(ssid);
	wifiConfiguration.setAllowedKeyManagement(allowedKeyManagement);
	wifiConfiguration.setAllowedProtocols(allowedProtocols);
	wifiConfiguration.setAllowedPairwiseCiphers(pairwiseCiphers);
	wifiConfiguration.setAllowedGroupCiphers(allowedGroupCiphers);
	wifiConfiguration.setWifiEnterpriseConfig(wifiEnterpriseConfig)
	deleteAllWlanConfig();
	Android.WifiManager().save(wifiConfiguration);
	Android.WifiManager().connect(wifiConfiguration, true);
}

function setWlanSecurityTTLS(ssid, phase2Method, allowedProtocols, pairwiseCiphers, allowedGroupCiphers, caCertificates, domain, identity, anonymousIdentity, pwd) {
	setWlanSecurityGeneric(ssid, 2, phase2Method, allowedProtocols, pairwiseCiphers, allowedGroupCiphers, caCertificates, domain, identity, anonymousIdentity, pwd);
}
function setWlanSecurityTTLS_NONE(ssid, allowedProtocols, pairwiseCiphers, allowedGroupCiphers, caCertificates, domain, identity, anonymousIdentity, pwd) {
	setWlanSecurityTTLS(ssid, 0, allowedProtocols, pairwiseCiphers, allowedGroupCiphers, caCertificates, domain, identity, anonymousIdentity, pwd);
}
function setWlanSecurityTTLS_PAP(ssid, allowedProtocols, pairwiseCiphers, allowedGroupCiphers, caCertificates, domain, identity, anonymousIdentity, pwd) {
	setWlanSecurityTTLS(ssid, 1, allowedProtocols, pairwiseCiphers, allowedGroupCiphers, caCertificates, domain, identity, anonymousIdentity, pwd);
}
function setWlanSecurityTTLS_MSCHAP(ssid, allowedProtocols, pairwiseCiphers, allowedGroupCiphers, caCertificates, domain, identity, anonymousIdentity, pwd) {
	setWlanSecurityTTLS(ssid, 2, allowedProtocols, pairwiseCiphers, allowedGroupCiphers, caCertificates, domain, identity, anonymousIdentity, pwd);
}
function setWlanSecurityTTLS_MSCHAPV2(ssid, allowedProtocols, pairwiseCiphers, allowedGroupCiphers, caCertificates, domain, identity, anonymousIdentity, pwd) {
	setWlanSecurityTTLS(ssid, 3, allowedProtocols, pairwiseCiphers, allowedGroupCiphers, caCertificates, domain, identity, anonymousIdentity, pwd);
}
function setWlanSecurityTTLS_GTC(ssid, allowedProtocols, pairwiseCiphers, allowedGroupCiphers, caCertificates, domain, identity, anonymousIdentity, pwd) {
	setWlanSecurityTTLS(ssid, 4, allowedProtocols, pairwiseCiphers, allowedGroupCiphers, caCertificates, domain, identity, anonymousIdentity, pwd);
}

function setWlanSecurityPWD(ssid, allowedProtocols, pairwiseCiphers, allowedGroupCiphers, identity, pwd) {
	setWlanSecurityGeneric(ssid, 3, 0, allowedProtocols, pairwiseCiphers, allowedGroupCiphers, null, null, identity, null, pwd);
}

function getWlanConfiguration(ssid) {
	var wifiManager = Android.WifiManager();
	var length = wifiManager.getConfiguredNetworksLength();
	for (let i = 0; i < length; i++) {
		var wifiConfig = wifiManager.getConfiguredNetwork(i);
		if (wifiConfig.getSSID() === ssid) {
			return wifiConfig;
		}
	}
	var ipConfiguration = Android.IpConfiguration(1, null, 0, null);
	var allowedKeyManagement = ["NONE"];
	return Android.WifiConfiguration(0, ssid, null, null, null, 0, false, allowedKeyManagement, null, null, null, null, null, null, null, false, null, ipConfiguration);
}

function deleteAllWlanConfig() {
	var wifiManager = Android.WifiManager();
	var length = wifiManager.getConfiguredNetworksLength();
	for (let i = 0; i < length; i++) {
		var wifiConfig = wifiManager.getConfiguredNetwork(0);
		wifiManager.forget(wifiConfig.getNetworkId());
	}
}

/* Functions to handle credentials */
function setUserCertificate(name, userCertificate) {
	Android.CredentialStorage().putUserCertificate(name, userCertificate);
}
function setCACertificate(name, CACertificate) {
	Android.CredentialStorage().putCACertificate(name, CACertificate);
}
function deleteUserCertificate(name) {
	Android.CredentialStorage().deleteUserCertificate(name);
}
function deleteCACertificate(name) {
	Android.CredentialStorage().deleteCACertificate(name);
}
function deleteAllCertificates() {
	Android.CredentialStorage().deleteAll();
}

/* Functions to handle Tethering */
function getTethering() {
	return Android.Preferences("Settings", "Global").getInt("tether_supported", 0);
}
function enableTethering() {
	Android.Preferences("Settings", "Global").setInt("tether_supported", 1);
}
function disableTethering() {
	Android.Preferences("Settings", "Global").setInt("tether_supported", 0);
}

/* Functions to handle PTP */
function getPtp() {
	return Android.Preferences("Settings", "Global").getInt("ptp_allowed", 0);
}
function enablePtp() {
	Android.Preferences("Settings", "Global").setInt("ptp_allowed", 1);
}
function disablePtp() {
	Android.Preferences("Settings", "Global").setInt("ptp_allowed", 0);
}

/* Function to erase all data */
function eraseAllData() {
	Android.System().eraseAllData();
}

/* Function to set the UTC date and time in format MMDDhhmmYYYY */
function setUtcTime(dateTime) {
	let dateTimeSec = dateTime + ".00";
	Android.System().setUtcTime(dateTimeSec);
}

/* Function to force apps as set system apps */
function setAppAsSystemApp(xmlSignedFileData) {
	Android.Security().setAppAsSystemApp(xmlSignedFileData);
}

/* Function to get device informations */
function getSoftwareVersion() {
	return Android.Device().getSoftwareVersion();
}
function getModel() {
	return Android.Device().getModel();
}
function getManufacturer() {
	return Android.Device().getManufacturer();
}
function getDeviceName() {
	return Android.Device().getDeviceName();
}
function getHostname() {
	return Android.Device().getHostname();
}
function getMacId() {
	return Android.Device().getMacId();
}
function getUUID() {
	return Android.Device().getUUID();
}
function getPsn() {
	return Android.Device().getPsn();
}
function getSerial() {
	return Android.Device().getSerial();
}
function getField1() {
	return Android.Device().getField1();
}
function getField2() {
	return Android.Device().getField2();
}
function getField3() {
	return Android.Device().getField3();
}
function getField4() {
	return Android.Device().getField4();
}
function getField5() {
	return Android.Device().getField5();
}

function setPreferencesPowerManagerProfileVeryHighlyOptimized(sBacklight, bSurroundLight, sPowerMode, sVolume, bMute, bHid, bCopyFromUsbStorage, sScreenOffTimeout)
{
	if (platform === "tab10") {
		Android.SystemProperties().setString("persist.sys.power-manager.level.min.display-output.backlight", sBacklight); 
		Android.SystemProperties().setBoolean("persist.sys.power-manager.level.min.surround_light.enable", bSurroundLight); 
	}
	Android.SystemProperties().setString("persist.sys.power-manager.level.min.display-output.power-mode", sPowerMode); 
	Android.SystemProperties().setString("persist.sys.power-manager.level.min.sound-output.volume", sVolume); 
	Android.SystemProperties().setBoolean("persist.sys.power-manager.level.min.sound-output.mute", bMute); 
	Android.SystemProperties().setBoolean("persist.sys.power-manager.level.min.hid.pointer-event.enable", bHid); 
	Android.SystemProperties().setBoolean("persist.sys.power-manager.level.min.externalstorage.copy.enable", bCopyFromUsbStorage ); 
	Android.SystemProperties().setString("persist.sys.power-manager.level.min.screen-off-timeout", sScreenOffTimeout ); 
}

function setPreferencesPowerManagerProfileHighlyOptimized(sBacklight, bSurroundLight, sPowerMode, sVolume, bMute, bHid, bCopyFromUsbStorage, sScreenOffTimeout)
{
	if (platform === "tab10") {
		Android.SystemProperties().setString("persist.sys.power-manager.level.low.display-output.backlight", sBacklight); 
		Android.SystemProperties().setBoolean("persist.sys.power-manager.level.low.surround_light.enable", bSurroundLight);
	}
	Android.SystemProperties().setString("persist.sys.power-manager.level.low.display-output.power-mode", sPowerMode); 
	Android.SystemProperties().setString("persist.sys.power-manager.level.low.sound-output.volume", sVolume); 
	Android.SystemProperties().setBoolean("persist.sys.power-manager.level.low.sound-output.mute", bMute);
	Android.SystemProperties().setBoolean("persist.sys.power-manager.level.low.hid.pointer-event.enable", bHid);
	Android.SystemProperties().setBoolean("persist.sys.power-manager.level.low.externalstorage.copy.enable", bCopyFromUsbStorage);
	Android.SystemProperties().setString("persist.sys.power-manager.level.low.screen-off-timeout", sScreenOffTimeout); 
}

function setProfileForAppsPowerManagerTasks(sProfileValue)
{
	Android.SystemProperties().setString("persist.sys.power-manager.device-sleep.level.default", sProfileValue); 
}
