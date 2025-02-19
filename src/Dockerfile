# Use Node.js as the build environment
FROM node:18-alpine AS build

# Set working directory
WORKDIR /app

# Copy package.json and package-lock.json first (to leverage Docker cache)
COPY package*.json ./

# Install ALL dependencies, including devDependencies
RUN npm install --include=dev

# Copy the rest of the app
COPY . .

# Build the Vue.js app
RUN npm run build

# Use Nginx to serve the built Vue app
FROM nginx:alpine AS production

# Set working directory to Nginx default public folder
WORKDIR /usr/share/nginx/html

# Remove default Nginx static files
RUN rm -rf ./*

# Copy built files from the build stage
COPY --from=build /app/dist .

# Expose port 80
EXPOSE 80

# Start Nginx when container starts
CMD ["nginx", "-g", "daemon off;"]
