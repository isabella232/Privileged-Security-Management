[![CodeQL](https://github.com/microsoft/Privileged-Security-Management/actions/workflows/codeql-analysis.yml/badge.svg)](https://github.com/microsoft/Privileged-Security-Management/actions/workflows/codeql-analysis.yml) [![Unit Test - Server](https://github.com/microsoft/Privileged-Security-Management/actions/workflows/UnitTest-Server.js.yml/badge.svg)](https://github.com/microsoft/Privileged-Security-Management/actions/workflows/UnitTest-Server.js.yml) [![Unit Test - User Interface](https://github.com/microsoft/Privileged-Security-Management/actions/workflows/UnitTest-UI.js.yml/badge.svg)](https://github.com/microsoft/Privileged-Security-Management/actions/workflows/UnitTest-UI.js.yml) [![CII Best Practices](https://bestpractices.coreinfrastructure.org/projects/5021/badge)](https://bestpractices.coreinfrastructure.org/projects/5021) [![License: MIT](https://img.shields.io/badge/License-MIT-blue)](https://github.com/microsoft/Privileged-Security-Management/blob/main/LICENSE)

# Introduction
Privileged Access Workstation ([PAW](https://aka.ms/paw)) and Securing Privileged Access ([SPA](https://aka.ms/spa)) may be the gold standard of administrative security, but the complexity of architecture and associated price point deter most administrators from implementing this in their environments. To lower the barrier of implementation, this application automates processes to reduce human error and simplify the required security expertise to deploy and manage PAWs and [SPA](https://aka.ms/spa) architectures, specifically from deployment to lifecycle management (on-board/decommission) in addition to SILO management.

This application is designed to operate with a managed identity but supports multiple authentication methods to access the Microsoft Graph API. The Graph API is used to manage the various aspects of the tenant, from the Conditional Access to the Device Configurations in Endpoint Manager.

# Deployment Guide
The App can be deployed in a variety of ways to support your diverse hosting environment.   
Check out our deployment guides here:
- [Azure](https://github.com/microsoft/Privileged-Security-Management/wiki/Deploy-to-Azure)
- [Container](https://github.com/microsoft/Privileged-Security-Management/wiki/Deploy-to-Container)
- [Linux](https://github.com/microsoft/Privileged-Security-Management/wiki/Deploy-to-Linux)
- [Windows](https://github.com/microsoft/Privileged-Security-Management/wiki/Deploy-to-Windows)
- [Deploy/Run from Source Code](https://github.com/microsoft/Privileged-Security-Management/wiki/Build-and-Run-from-Source)

# Documentation
The application's docs can be found in the GitHub wiki!   
https://github.com/microsoft/Privileged-Security-Management/wiki

# Roadmap
This is also found on the wiki!   
https://github.com/microsoft/Privileged-Security-Management/wiki/Version-Roadmap

## Contributing
This project welcomes contributions and suggestions.  Most contributions require you to agree to a
Contributor License Agreement (CLA) declaring that you have the right to, and actually do, grant us
the rights to use your contribution. For details, visit https://cla.opensource.microsoft.com.

When you submit a pull request, a CLA bot will automatically determine whether you need to provide
a CLA and decorate the PR appropriately (e.g., status check, comment). Simply follow the instructions
provided by the bot. You will only need to do this once across all repos using our CLA.

This project has adopted the [Microsoft Open Source Code of Conduct](https://opensource.microsoft.com/codeofconduct/).
For more information see the [Code of Conduct FAQ](https://opensource.microsoft.com/codeofconduct/faq/) or
contact [opencode@microsoft.com](mailto:opencode@microsoft.com) with any additional questions or comments.

## Trademarks
This project may contain trademarks or logos for projects, products, or services. Authorized use of Microsoft 
trademarks or logos is subject to and must follow 
[Microsoft's Trademark & Brand Guidelines](https://www.microsoft.com/en-us/legal/intellectualproperty/trademarks/usage/general).
Use of Microsoft trademarks or logos in modified versions of this project must not cause confusion or imply Microsoft sponsorship.
Any use of third-party trademarks or logos are subject to those third-party's policies.
