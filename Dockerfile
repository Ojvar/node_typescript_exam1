ARG	PORT=9090
ARG	HOST=0.0.0.0

# Select base image
FROM	node:alpine

# Install git
RUN	apk add git &&
	apk update

# Select working path
WORKDIR	/usr/src/app

# Install npm
COPY	package*.json ./
RUN	npm install

# Copy source files
COPY	. .
EXPOSE	$PORT

# Setup env data
ENV	PORT $PORT
ENV	HOST $HOST

# Run server
CMD [ "node", "server.js" ]
