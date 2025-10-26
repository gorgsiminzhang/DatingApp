# Welcome to your Expo app 👋

This is an [Expo](https://expo.dev) project created with [`create-expo-app`](https://www.npmjs.com/package/create-expo-app).

## Node.js Version

This project is built using **Node.js v20.19.5 (Iron LTS)**.

### Recommended Setup (Windows + Git Bash)

We recommend using **NVS (Node Version Switcher)** to manage Node versions:

```bash
# Install NVS if not already
git clone https://github.com/jasongin/nvs "$HOME/.nvs"
. "$HOME/.nvs/nvs.sh"
echo '. "$HOME/.nvs/nvs.sh"' >> ~/.bashrc

# automatically load NVS without reopen bash
source ~/.bashrc

# Add and use the correct Node version
nvs add 20.19.5
nvs use 20.19.5


# Verify installation:
node -v
npm -v
npx -v

# Start the app
npx expo start

# (Optional) Install dependencies
npm install
```


## cloudflared Version for temparory access
```bash
# check version
cloudflared --version

# create instant tunnel
cloudflared tunnel --url http://localhost:XXXX
## (check localhost portal from: npx expo start)

# Remote access http link after 
# "Your quick Tunnel has been created! Visit it at (it may take some time to be reachable):"
```