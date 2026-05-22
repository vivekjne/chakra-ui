import { Card, For, HStack, Kbd, Stack, Text } from "@chakra-ui/react"

const shortcuts = [
  { label: "Open command menu", keys: ["Ctrl", "K"] },
  { label: "Go to dashboard", keys: ["G", "D"] },
  { label: "Create new item", keys: ["C"] },
]

export const CardWithShortcuts = () => {
  return (
    <Card.Root width="360px" variant="outline">
      <Card.Body gap="4">
        <Stack gap="1">
          <Card.Title>Keyboard shortcuts</Card.Title>
          <Card.Description>
            Common actions available from anywhere in the app.
          </Card.Description>
        </Stack>

        <Stack gap="3">
          <For each={shortcuts}>
            {(shortcut) => (
              <HStack key={shortcut.label} justify="space-between">
                <Text textStyle="sm">{shortcut.label}</Text>
                <HStack gap="1">
                  <For each={shortcut.keys}>
                    {(key) => <Kbd key={key}>{key}</Kbd>}
                  </For>
                </HStack>
              </HStack>
            )}
          </For>
        </Stack>
      </Card.Body>
    </Card.Root>
  )
}
