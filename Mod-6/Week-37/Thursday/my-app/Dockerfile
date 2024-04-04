FROM node:21-alpine3.18

WORKDIR /app 
# COpy and install node modules
COPY package.json .
COPY package-lock.json .
# can use the wildcard * if needed
# COPY package*.json . 
RUN npm install

# To Copy and Install python dependencies
COPY Pipfile .
RUN pip install

COPY . .
CMD ["npm", "start"] 