#   parent image
FROM node:17-alpine

#   to make the volume server restart and reflect changes when it detects change in the container 
RUN npm install -g nodemon

#   specify the working directory in the image
WORKDIR /app

#   copy source code from . to /app path in the image
# COPY . /app

#   to make 'npm install' work before copying rest of the source files
COPY package.json .

#   run this command at built time
#   running it before copying source code make it cached when source code changes
RUN npm install

#   now the working directory is /app, so any path will be relative to it
COPY . .

#   invalid     =>      this command will be run at built time 
# RUN node app.js

#   tells docker which port will be exposed by the container not the machine
#   optional if we run the image from terminal, and mandatory in docker-desktop case
EXPOSE 4000

#   run this command (node app.js at run time)
# CMD [ "node", "app.js" ]

#   run script from package.json file
#   -L      =>      use 'legacy watch'  -->>    alters the way the nodemon works with docker (needed in windows)
#   changes how nodemon watches for changes
CMD [ "nodemon", "run", "dev" ]