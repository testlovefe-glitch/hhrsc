// 订单类型
export enum OrderType {
  NORMAL = '普通',
  FLASH_SALE = '秒杀',
  GROUP_BUY = '团购',
}

// 订单状态
export enum OrderStatus {
  PENDING_PAYMENT = '待付款',
  PENDING_SHIPMENT = '待发货',
  SHIPPED = '已发货',
  COMPLETED = '已完成',
  REFUNDING = '退款/售后',
  CANCELLED = '已取消',
}

// 售后状态
export enum AfterSalesStatus {
  PENDING = '处理中',
  COMPLETED = '已完成',
  REJECTED = '已拒绝',
  CANCELLED = '已取消',
}

// 用户状态
export enum UserStatus {
  ACTIVE = '正常',
  FROZEN = '冻结',
}

// 提现状态
export enum WithdrawalStatus {
  PENDING = '处理中',
  SUCCESS = '成功',
  REJECTED = '审核拒绝',
  FAILED = '打款失败',
}

// 打款状态
export enum PaymentStatus {
  SUCCESS = '打款成功',
  FAILED = '打款失败',
}

// 合伙人等级
export enum PartnerLevel {
  NONE = '无',
  JUNIOR = '初级合伙人',
  MIDDLE = '中级合伙人',
  SENIOR = '高级合伙人',
}

// 优惠券状态
export enum CouponStatus {
  DISTRIBUTING = '发放中',
  ENDED = '已结束',
}

// 用户优惠券状态
export enum UserCouponStatus {
  UNUSED = '未使用',
  USED = '已使用',
  EXPIRED = '已过期',
}

// 营销活动状态
export enum CampaignStatus {
  NOT_STARTED = '未开始',
  ONGOING = '进行中',
  ENDED = '已结束',
}

// 拼团状态
export enum GroupBuyStatus {
  PENDING = '拼团中',
  SUCCESS = '拼团成功',
  FAILED = '拼团失败',
}

// 秒杀状态
export enum FlashSaleStatus {
  NOT_STARTED = '未开始',
  ONGOING = '进行中',
  ENDED = '已结束',
}

// 合伙人礼包状态
export enum PartnerPackageStatus {
  ON_SHELVES = '上架',
  OFF_SHELVES = '下架',
}

// 审核状态
export enum AuditStatus {
  PENDING = '待审核',
  APPROVED = '已通过',
  REJECTED = '已拒绝',
}

// 商品状态
export enum ProductStatus {
  ON_SHELVES = '上架',
  OFF_SHELVES = '下架',
}

// 内容状态 (Banner, 公告, FAQ)
export enum ContentStatus {
  VISIBLE = '显示中',
  HIDDEN = '已隐藏',
  PUBLISHED = '已发布',
  DRAFT = '草稿',
}

// 合伙人激活状态
export enum PartnerActivationStatus {
  ACTIVATED = '已激活',
  PENDING = '待激活',
}
export enum IncomeStatus {
  CREDITED = '已入账',
  SETTLED = '已结算',
  PENDING = '待结算',
  COMPLETED = '已完成',
}
