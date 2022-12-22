import axios from 'axios';

export default axios.create({
    baseURL: "https://api.yelp.com/v3/businesses",
    headers:
    {
        Authorization: "Bearer qvxQGxx0E8hfu6vG_XcC1x4pQ7_JgcDA6RvNeU0lY7rsMeV0MT30rDK8YwFd-nYS3pcc7z8yDufhY87z-dtGPC51C_83VhlZCPLOAJ6-zB5924b4NxGYLv5wg0GNYHYx"	
    },
});