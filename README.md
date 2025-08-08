# Semantic Layout

一个为React应用提供语义化布局组件的库，适配shadcn和tailwindcss系统，旨在提高代码可读性和开发效率。

## 简介

Semantic Layout提供了一系列语义化的布局组件，这些组件被设计为与[shadcn/ui](https://ui.shadcn.com/)和[Tailwind CSS](https://tailwindcss.com/)无缝集成。通过使用这些组件，你可以：

- 使用语义化的组件名称提高代码可读性
- 减少重复的布局代码
- 保持项目结构的一致性
- 加速UI开发过程

## 可用组件

### 布局组件

- **AbsoluteCenter** - 在容器中绝对居中元素
- **Anchor** - 创建语义化的锚链接
- **Box** - 基础布局容器
- **Center** - 居中内容
- **Flex** - 灵活的Flexbox布局容器
- **Grid** - 网格布局容器
- **Spacer** - 在元素之间添加空间

### 其他组件

- **Theme** - 主题管理组件，包含ThemeProvider和ThemeToggle
- **Titlebar** - 应用程序标题栏组件

## 安装

你可以使用[shadcn CLI](https://ui.shadcn.com/docs/cli)来安装这些组件：

```bash
# 安装shadcn CLI
npm install -g shadcn-ui

# 添加组件
shadcn add absolute-center
shadcn add flex
# 添加更多你需要的组件...
```

或者，你可以将此仓库配置为自定义registry：

```bash
# 在你的项目中配置registry
shadcn registry add semantic-layout https://your-registry-url.com
```

## 使用示例

```tsx
import { Flex } from "@/components/ui/flex"
import { Box } from "@/components/ui/box"
import { Center } from "@/components/ui/center"
import { Spacer } from "@/components/ui/spacer"

export default function MyComponent() {
  return (
    <Flex direction="column" gap="4">
      <Box p="4" border="1" rounded="md">
        <Center>居中内容</Center>
      </Box>
      <Spacer size="4" />
      <Box p="4" border="1" rounded="md">
        另一个内容块
      </Box>
    </Flex>
  )
}
```

## 关于Registry

此项目使用shadcn的registry系统，允许你通过CLI工具轻松地将组件添加到任何React项目中。

- 使用`registry.json`文件定义组件及其文件
- 通过`shadcn build`命令构建registry
- Registry项目作为静态文件提供，位于`public/r/[name].json`
- 包含路由处理程序用于提供registry项目
- 所有registry项目都与`shadcn` CLI兼容
- 支持通过`Open in v0` API集成v0

## 文档

访问[shadcn文档](https://ui.shadcn.com/docs/registry)查看完整的registry文档。

## 贡献

欢迎贡献！请随时提交问题或拉取请求。

## 许可证

MIT
