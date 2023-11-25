#Source image
FROM node:lts-alpine

#Set workdir
WORKDIR /app

#Set Environment Variables
ENV PATH /app/node_modules/.bin:$PATH
ENV NODE_OPTIONS="--openssl-legacy-provider"

#Copy project files
COPY ./src /app/src
COPY ./public /app/public
COPY package.json /app/package.json

#Install node dependecies
RUN npm install
RUN npm install react-scripts@3.4.0 -g

#Expose port
EXPOSE 3000

#Run application
CMD ["npm", "run", "start", "--", "--host", "0.0.0.0", "--port", "3000"]
