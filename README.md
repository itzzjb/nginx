### Running NGINX

```sh
nginx
```

### Reloading NGINX

When ever we done a change to the configurations we need to reload the NGINX server.
Sometimes to see the changes in the browser, you might need to do a hard reload too.

```sh
nginx -s reload
```

---
>[!NOTE]
> Note that we can build an image from the Dockerfile and running that image in 4 containers using docker in ports 8001, 8002, 8003 and 8004.
