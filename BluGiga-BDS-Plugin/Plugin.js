function GetInfo(infoObject) {
    infoObject.Name = "Bluegiga XML Profile (Alpha)";
    infoObject.Description = "To convert a profile Bluegiga XML File";
    infoObject.Author = "Lee Williams (github: alphauk101";
    infoObject.Version = "0.1";
    infoObject.IsClient = true;
    return infoObject;
}

function RunPlugin(profileData) {
	//Get the template file for standard XML Bluegiga project.
	var templateFileContents = FileManager.ReadFile("blgig_V0.tlp");
	outputTemplate = ProcessTemplate(templateFileContents, profileData);
    FileManager.CreateFile("gatt113.xml", outputTemplate);
}



