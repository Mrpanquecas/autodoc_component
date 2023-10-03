<a id="readme-top"></a>

<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#contributing">Contributing</a></li>
  </ol>
</details>

<!-- GETTING STARTED -->
## Getting Started

### Prerequisites

* nodejs environment with npm

### Installation

1. Clone the repo
   ```sh
   git clone https://github.com/github_username/repo_name.git
   ```

2. Jump to repo directory
   ```sh
    cd <repo>
   ```
   
3. Install NPM packages
   ```sh
   npm install
   ```


<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- USAGE EXAMPLES -->
## Usage


1. Run a local version of storybook
   ```sh
   npm run storybook
   ```
2. Build the component library
   ```sh
   npm run build
   ```
   this will create a new folder called "dist" with the relevant library files inside

3. Publish the library
   ```sh
   npm publish
   ```
    At the moment extra permissions might be needed for this. Please reach Ricardo Costa for details

After these steps the library should now be installable using npm i <package_name>


<p align="right">(<a href="#readme-top">back to top</a>)</p>


<!-- CONTRIBUTING -->
## Contributing

1. Create a new component/story/test/feature/fix

2. Increment package version in package.json ex: (0.0.1 ==> 0.0.2)

3. run the build command: 

4. ```js
   npm run build
   ```
<p align="right">(<a href="#readme-top">back to top</a>)</p>