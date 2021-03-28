ARG		PORT=9090
ARG		HOST=0.0.0.0

# Select base image
FROM	node:alpine

# Meta data
LABEL	MAINTAINER "MOjvar.AmirHossein@Gmail.com"

# Install git
RUN		apk add git && \
	mkdir /usr/src -p && \
	cd /usr/src && \
	git clone https://github.com/Ojvar/node_typescript_exam1.git app
# Select working path
WORKDIR	/usr/src/app/node-ts

# Install npm
RUN		npm install

# Copy source files
EXPOSE	$PORT

# Setup env data
ENV		PORT $PORT
ENV		HOST $HOST

# Run server
CMD 		[ "node", "server.js" ]
