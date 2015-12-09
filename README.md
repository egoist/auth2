## Auth2

**[WIP]** 一个用户单页应用用户授权登录的模块。

## 如何工作

Auth2 基于 token 工作，分为 `requestToken` 和 `accessToken`，用户通过 `requestToken` 定时向服务器获取新的 `accessToken`，而只有 `accessToken` 真正用于用户在你的网页应用里的相关需要权限的操作。初始的 `requestToken` 是用户登录时获取到的。`requestToken` 一般不变，只能用户手动更新。

## License

MIT &copy; [EGOIST](https://github.com/egoist)
