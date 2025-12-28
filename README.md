<div align="center">
  <h1>Portfolio Site</h1>
</div>

![alt text](https://raw.githubusercontent.com/vincevd1/portfolio-site/main/src/assets/images/portfolio_site.png)

This project is a personal portfolio website built with React and TailwindCSS.
It has a modern design and is used to showcase my experience and projects as well as a little about me.

You're free to copy this site and use it for yourself.

## Development

To run the project locally in development mode, make sure you have Node.js installed.

First clone the repository, and install the dependencies.

```
git clone https://github.com/vincevd1/portfolio-site
cd portfolio-site
npm install
```

After that you can run the site locally using `npm run dev`

The application will be available at `http://localhost:5173` by default.

## Production

For running the site in production you first need a dedicated or cloud server. It does not need much resources since it only needs to run nginx and serve a static website.

When you have access to the machine you will need to install Nginx

### Nginx setup

```sh
sudo apt intall nginx
```

After that clone the repository into your home folder and cd into it

```sh
git clone https://github.com/vincevd1/portfolio-site
cd portfolio-site
```

Now copy the contents of `nginx.conf` to `/etc/nginx/sites-enabled/portfolio`, replacing `yourdomain.com` with your domain name.

This can be done by running

```
sudo cp nginx.conf /etc/nginx/sites-enabled/portfolio
```

or by copying the contents of the file manually:

```
server {
    listen 80;
    server_name yourdomain.com;

    root /var/www/portfolio/dist;
    index index.html;

    location / {
        try_files $uri /index.html;
    }
}
```

### HTTPS Setup (Optional)

If you would like to run the site under https please install certbot

```
sudo apt install python3-certbot-nginx
```

Run certbot with the Nginx flag and follow the steps prompted

```
certbot --nginx
```

### Deployment

Finally, run the deploy script located in the root folder of the project

```
chmod +x deploy.sh
./deploy.sh
```

The site should now be deployed on your domain (under https).
