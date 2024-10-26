# Use Node.js as the base image
FROM node:18-alpine

# Set the working directory inside the container
WORKDIR /codebase

# Copy package.json and yarn.lock to install dependencies
COPY package.json yarn.lock ./

# Install dependencies
RUN yarn install

# Copy the rest of the application code
COPY . .

# Expose the port Next.js runs on
EXPOSE 3000

# Set environment variables for production
ENV NODE_ENV=production

# Build the Next.js application
RUN yarn build

# Command to start the Next.js server
CMD ["yarn", "start"]
