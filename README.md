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
  </ol>
</details>

<!-- GETTING STARTED -->
## Getting Started

### Prerequisites

* nodejs environment with npm

### Installation

1. Clone the repo
   ```sh
   git clone git@github.com:Mrpanquecas/autodoc_component.git
   ```

2. Jump to repo directory
   ```sh
    cd autodoc_component
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

After these steps the library should now be installable using npm i autodoc_component**


<p align="right">(<a href="#readme-top">back to top</a>)</p>
