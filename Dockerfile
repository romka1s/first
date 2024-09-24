# Stage 1: Build the React application
FROM node:18-alpine as build-stage

# Set the working directory inside the container to /app
WORKDIR /app

# Assuming your React app is in the 'react' directory, copy the package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of your React app into the container
COPY . .

# Build the application using the production build script
RUN npm run prod

# Stage 2: Setup Nginx to serve the application
FROM nginx:stable-alpine as production-stage

# Copy the build directory from the build-stage to the Nginx serve directory for the platform
COPY --from=build-stage /app/build /usr/share/nginx/html

# Expose port 80 for HTTP traffic
EXPOSE 80

# Start Nginx in the foreground
CMD ["nginx", "-g", "daemon off;"]
