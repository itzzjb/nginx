# We are gong to use these file to create an image of the express server and spin of mutiple containers from it.

# Specifying the base image
FROM node:latest

# We need to specify the working directory (Where the files will be copied in the container)
WORKDIR /usr/src/app

# Copy all the files from the application to the containers working directory
COPY . /usr/src/app/

# Installing all the dependencies
RUN npm install

# Expose a port to the outside
# Need to have the same port as the express server's port
EXPOSE 7777

# Starting the server using the command
CMD npm start