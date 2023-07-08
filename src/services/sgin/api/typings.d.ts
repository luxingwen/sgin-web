declare namespace API {
  type App = {
    /** ApiKey 是调用方的API Key */
    api_key?: string;
    /** CreatedAt 记录了调用方创建的时间 */
    created_at?: string;
    /** ID 是调用方的主键 */
    id?: number;
    /** Name 是调用方的名称 */
    name?: string;
    /** SecKey 是调用方的Sec Key */
    sec_key?: string;
    /** Status 0:未启用 1:启用 2:删除 */
    status?: number;
    /** UpdatedAt 记录了调用方信息最后更新的时间 */
    updated_at?: string;
    /** UserUUID 是用户的UUID */
    user_uuid?: string;
    /** UUID 是调用方的唯一标识符 */
    uuid?: string;
  };

  type AppInfoResponse = {
    /** 状态码 */
    code?: number;
    data?: App;
    /** 提示信息 */
    message?: string;
    /** 请求唯一标识 */
    trace_id?: string;
  };

  type AppPageResponse = {
    current?: number;
    data?: App[];
    pageSize?: number;
    total?: number;
  };

  type AppQueryResponse = {
    /** 状态码 */
    code?: number;
    data?: AppPageResponse;
    /** 提示信息 */
    message?: string;
    /** 请求唯一标识 */
    trace_id?: string;
  };

  type Menu = {
    /** CreatedAt 记录了菜单创建的时间 */
    created_at?: string;
    /** ID 是菜单的主键 */
    id?: number;
    /** Link 是菜单的链接 */
    link?: string;
    /** Name 是菜单的名称 */
    name?: string;
    /** ParentUUID 是父菜单的UUID */
    parent_uuid?: string;
    /** UpdatedAt 记录了菜单信息最后更新的时间 */
    updated_at?: string;
    /** UUID 是菜单的唯一标识符 */
    uuid?: string;
  };

  type MenuPageResponse = {
    current?: number;
    data?: Menu[];
    pageSize?: number;
    total?: number;
  };

  type MenuQueryResponse = {
    /** 状态码 */
    code?: number;
    data?: MenuPageResponse;
    /** 提示信息 */
    message?: string;
    /** 请求唯一标识 */
    trace_id?: string;
  };

  type PagedResponse = {
    current?: number;
    data?: Record<string, any>;
    pageSize?: number;
    total?: number;
  };

  type postAppApiPermissionsListParams = {
    /** With the bearer started */
    Authorization: string;
  };

  type postMenu_openAPI_deleteParams = {
    /** token */
    Authorization: string;
  };

  type postMenuCreateParams = {
    /** token */
    Authorization: string;
  };

  type postMenuListParams = {
    /** token */
    Authorization: string;
  };

  type postMenuUpdateParams = {
    /** token */
    Authorization: string;
  };

  type postRole_openAPI_deleteParams = {
    /** token */
    Authorization: string;
  };

  type postRoleCreateParams = {
    /** token */
    Authorization: string;
  };

  type postRoleListParams = {
    /** token */
    Authorization: string;
  };

  type postRoleUpdateParams = {
    /** token */
    Authorization: string;
  };

  type postUploadParams = {
    /** token */
    Authorization: string;
  };

  type ReqApiPermissionParam = {
    app_id?: string;
    current?: number;
    end_time?: string;
    pageSize?: number;
    start_time?: string;
  };

  type ReqAppQueryParam = {
    /** api_key */
    api_key?: string;
    current?: number;
    end_time?: string;
    /** 名称 */
    name?: string;
    pageSize?: number;
    start_time?: string;
    /** 状态 */
    status?: number;
  };

  type ReqMenuDeleteParam = {
    uuid: string;
  };

  type ReqMenuQueryParam = {
    current?: number;
    end_time?: string;
    name?: string;
    pageSize?: number;
    start_time?: string;
  };

  type ReqRegisterParam = {
    code?: string;
    email?: string;
    password?: string;
    phone?: string;
    username?: string;
  };

  type ReqRoleQueryParam = {
    current?: number;
    end_time?: string;
    isActive?: boolean;
    name?: string;
    pageSize?: number;
    start_time?: string;
  };

  type ReqUserDeleteParam = {
    uuid: string;
  };

  type ReqUserLogin = {
    /** 密码 */
    password: string;
    /** 用户名或邮箱 */
    username: string;
  };

  type ReqUserQueryParam = {
    current?: number;
    /** 邮箱 */
    email?: string;
    end_time?: string;
    /** 昵称 */
    nickname?: string;
    pageSize?: number;
    /** 手机号 */
    phone?: string;
    /** 性别 */
    sex?: number;
    start_time?: string;
    /** 状态 */
    status?: number;
    /** 用户名 */
    username?: string;
    /** uuid */
    uuid?: string;
  };

  type ReqUuidParam = {
    uuid?: string;
    uuids?: string[];
  };

  type ReqVerificationCodeParam = {
    code?: string;
    email?: string;
    phone?: string;
  };

  type Response = {
    code?: number;
    data?: Record<string, any>;
    message?: string;
    trace_id?: string;
  };

  type ResUserLogin = {
    token?: string;
  };

  type Role = {
    /** CreatedAt 记录了角色创建的时间 */
    created_at?: string;
    /** Desc 是对角色的描述 */
    desc?: string;
    /** ID 是角色的主键 */
    id?: number;
    /** IsActive 标识角色是否是活跃的 */
    is_active?: boolean;
    /** Name 是角色的名称，它在系统中是唯一的 */
    name?: string;
    /** UpdatedAt 记录了角色最后更新的时间 */
    updated_at?: string;
    /** Uuid 是角色的唯一标识 */
    uuid?: string;
  };

  type RoleInfoResponse = {
    /** 状态码 */
    code?: number;
    data?: Role;
    /** 提示信息 */
    message?: string;
    /** 请求唯一标识 */
    trace_id?: string;
  };

  type RolePageResponse = {
    current?: number;
    data?: Role[];
    pageSize?: number;
    total?: number;
  };

  type RoleQueryResponse = {
    /** 状态码 */
    code?: number;
    data?: RolePageResponse;
    /** 提示信息 */
    message?: string;
    /** 请求唯一标识 */
    trace_id?: string;
  };

  type User = {
    /** 年龄 */
    age?: number;
    /** 头像 */
    avatar?: string;
    /** 创建时间 */
    created_at?: string;
    /** 邮箱 */
    email?: string;
    id?: number;
    /** 昵称 */
    nickname?: string;
    /** 密码 */
    password?: string;
    /** 手机号 */
    phone?: string;
    /** 性别 0:未知 1:男 2:女 */
    sex?: string;
    /** 个性签名 */
    signed?: string;
    /** 状态 0:禁用 1:启用 2:删除 */
    status?: number;
    /** 更新时间 */
    updated_at?: string;
    /** 用户名 */
    username?: string;
    /** 用户唯一标识 */
    uuid?: string;
  };

  type UserInfoResponse = {
    /** 状态码 */
    code?: number;
    data?: User;
    /** 提示信息 */
    message?: string;
    /** 请求唯一标识 */
    trace_id?: string;
  };

  type UserPageResponse = {
    current?: number;
    data?: User[];
    pageSize?: number;
    total?: number;
  };

  type UserQueryResponse = {
    /** 状态码 */
    code?: number;
    data?: UserPageResponse;
    /** 提示信息 */
    message?: string;
    /** 请求唯一标识 */
    trace_id?: string;
  };
}
