# FROM       ubuntu:18.04
# MAINTAINER quark325@gmail.com
# RUN        apt-get -y update


# RUN apt-get -y install git
# RUN 

FROM       node:12
MAINTAINER quark325@gmail.com
RUN        apt-get -y update

RUN git clone https://github.com/quark325/uilab-visualization-demo.git
WORKDIR /uilab-visualization-demo
RUN npm install --only=production
RUN npm install pm2 -g
RUN npm audit fix

RUN npm run build

EXPOSE 22 80 443 3000
# RUN pm2 --name UilabDemo start npm -- start
CMD ["pm2-runtime", "--name", "UilabDemo", "start", "npm", "--", "start"]