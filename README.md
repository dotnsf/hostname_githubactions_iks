# hostname_githubactions_iks

## Overview

- Sample application which simply returns text-contents of `/etc/hostname` in a running machine/container/vm.
- Docker ready(Docker file included)
- [GitHub Actions](https://github.com/features/actions) ready with IKS(IBM Kubernetes Services) in [IBM Cloud](https://cloud.ibm.com/)


## Pre-requisites

- IBM Cloud Basic account
  - Only basic account or above can create IKS instance(by free).
- GitHub account
- Node.js V10 installed ( if you want to run this application in your local machine ).


## Run in local machine

- Install Node.js V10+

- `$ cd hostname_githubactions_iks`

- `$ npm install`

- `$ node app`

- Access to `http://localhost:8080/` in your browser or curl.


## Run in IKS with GitHub Actions


## References

- https://github.com/IBM/actions-ibmcloud-iks


## Licensing

This code is licensed under MIT.


## Copyright

2020 [K.Kimura @ Juge.Me](https://github.com/dotnsf) all rights reserved.

