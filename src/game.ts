import { createChannel } from '../node_modules/decentraland-builder-scripts/channel'
import { createInventory } from '../node_modules/decentraland-builder-scripts/inventory'
import Script1 from "../d5ee9a47-8484-4824-a609-996298830b51/src/item"
import Script2 from "../f89ab04f-46ef-42ea-912b-b194eb8d2f02/src/item"
import Script3 from "../b88efbbf-2a9a-47b4-86e1-e38ecc2b433b/src/item"
import Script4 from "../7d669c08-c354-45e4-b3a3-c915c8fd6b6e/src/item"
import Script5 from "../a56ac3e0-aef8-48b9-b55b-844b3fa77056/src/item"

const _scene = new Entity('_scene')
engine.addEntity(_scene)
const transform = new Transform({
  position: new Vector3(0, 0, 0),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
_scene.addComponentOrReplace(transform)

const entity = new Entity('entity')
engine.addEntity(entity)
entity.setParent(_scene)
const gltfShape = new GLTFShape("c9b17021-765c-4d9a-9966-ce93a9c323d1/FloorBaseGrass_01/FloorBaseGrass_01.glb")
gltfShape.withCollisions = true
gltfShape.isPointerBlocker = true
gltfShape.visible = true
entity.addComponentOrReplace(gltfShape)
const transform2 = new Transform({
  position: new Vector3(8, 0, 8),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
entity.addComponentOrReplace(transform2)

const entity2 = new Entity('entity2')
engine.addEntity(entity2)
entity2.setParent(_scene)
entity2.addComponentOrReplace(gltfShape)
const transform3 = new Transform({
  position: new Vector3(24, 0, 8),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
entity2.addComponentOrReplace(transform3)

const entity3 = new Entity('entity3')
engine.addEntity(entity3)
entity3.setParent(_scene)
entity3.addComponentOrReplace(gltfShape)
const transform4 = new Transform({
  position: new Vector3(8, 0, 24),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
entity3.addComponentOrReplace(transform4)

const entity4 = new Entity('entity4')
engine.addEntity(entity4)
entity4.setParent(_scene)
entity4.addComponentOrReplace(gltfShape)
const transform5 = new Transform({
  position: new Vector3(24, 0, 24),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
entity4.addComponentOrReplace(transform5)

const rectangularCanopy = new Entity('rectangularCanopy')
engine.addEntity(rectangularCanopy)
rectangularCanopy.setParent(_scene)
const transform6 = new Transform({
  position: new Vector3(29.5, 0, 12),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
rectangularCanopy.addComponentOrReplace(transform6)
const gltfShape2 = new GLTFShape("b822fad3-67d2-472b-aaf2-84fffad00b8c/Canopy_02/Canopy_02.glb")
gltfShape2.withCollisions = true
gltfShape2.isPointerBlocker = true
gltfShape2.visible = true
rectangularCanopy.addComponentOrReplace(gltfShape2)

const squareCanopy = new Entity('squareCanopy')
engine.addEntity(squareCanopy)
squareCanopy.setParent(_scene)
const transform7 = new Transform({
  position: new Vector3(25.5, 0, 22),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
squareCanopy.addComponentOrReplace(transform7)
const gltfShape3 = new GLTFShape("bc789145-d689-4559-a1ff-71c2da79b7de/Canopy_01/Canopy_01.glb")
gltfShape3.withCollisions = true
gltfShape3.isPointerBlocker = true
gltfShape3.visible = true
squareCanopy.addComponentOrReplace(gltfShape3)

const floorMetalSmall = new Entity('floorMetalSmall')
engine.addEntity(floorMetalSmall)
floorMetalSmall.setParent(_scene)
const transform8 = new Transform({
  position: new Vector3(27.5, 3, 24),
  rotation: new Quaternion(-0.7071068286895752, 1.5394153601527394e-15, 8.429369557916289e-8, 0.7071068286895752),
  scale: new Vector3(2.0199999809265137, 1.0000033378601074, 1.5300052165985107)
})
floorMetalSmall.addComponentOrReplace(transform8)
const gltfShape4 = new GLTFShape("416e5efb-c6d3-4997-9527-6d06f92a548b/MetalFloor_Small.glb")
gltfShape4.withCollisions = true
gltfShape4.isPointerBlocker = true
gltfShape4.visible = true
floorMetalSmall.addComponentOrReplace(gltfShape4)

const floorMetalSmall2 = new Entity('floorMetalSmall2')
engine.addEntity(floorMetalSmall2)
floorMetalSmall2.setParent(_scene)
floorMetalSmall2.addComponentOrReplace(gltfShape4)
const transform9 = new Transform({
  position: new Vector3(27.5, 3, 24),
  rotation: new Quaternion(0.5000002384185791, 0.49999988079071045, 0.4999997615814209, -0.5000001192092896),
  scale: new Vector3(2.0199999809265137, 1.000003695487976, 1.5300054550170898)
})
floorMetalSmall2.addComponentOrReplace(transform9)

const floorMetalSmall3 = new Entity('floorMetalSmall3')
engine.addEntity(floorMetalSmall3)
floorMetalSmall3.setParent(_scene)
floorMetalSmall3.addComponentOrReplace(gltfShape4)
const transform10 = new Transform({
  position: new Vector3(23.5, 3, 24),
  rotation: new Quaternion(0.5000002384185791, 0.49999988079071045, 0.4999997615814209, -0.5000001192092896),
  scale: new Vector3(2.0199999809265137, 1.000003695487976, 1.5300054550170898)
})
floorMetalSmall3.addComponentOrReplace(transform10)

const floorMetalSmall4 = new Entity('floorMetalSmall4')
engine.addEntity(floorMetalSmall4)
floorMetalSmall4.setParent(_scene)
floorMetalSmall4.addComponentOrReplace(gltfShape4)
const transform11 = new Transform({
  position: new Vector3(31.5, 3, 16),
  rotation: new Quaternion(0.5000002384185791, 0.49999988079071045, 0.4999997615814209, -0.5000001192092896),
  scale: new Vector3(4.039999961853027, 1.5000054836273193, 1.5300054550170898)
})
floorMetalSmall4.addComponentOrReplace(transform11)

const floorMetalSmall5 = new Entity('floorMetalSmall5')
engine.addEntity(floorMetalSmall5)
floorMetalSmall5.setParent(_scene)
floorMetalSmall5.addComponentOrReplace(gltfShape4)
const transform12 = new Transform({
  position: new Vector3(31.5, 3, 16),
  rotation: new Quaternion(0.7071068286895752, -2.086162567138672e-7, -2.9278172064550745e-7, -0.7071068286895752),
  scale: new Vector3(2.0199997425079346, 1.5000094175338745, 1.7327343225479126)
})
floorMetalSmall5.addComponentOrReplace(transform12)

const floorMetalSmall6 = new Entity('floorMetalSmall6')
engine.addEntity(floorMetalSmall6)
floorMetalSmall6.setParent(_scene)
floorMetalSmall6.addComponentOrReplace(gltfShape4)
const transform13 = new Transform({
  position: new Vector3(31.5, 3, 8),
  rotation: new Quaternion(0.7071068286895752, -2.086162567138672e-7, -2.9278172064550745e-7, -0.7071068286895752),
  scale: new Vector3(2.0199997425079346, 1.5000097751617432, 1.5300095081329346)
})
floorMetalSmall6.addComponentOrReplace(transform13)

const instagramButtonLink = new Entity('instagramButtonLink')
engine.addEntity(instagramButtonLink)
instagramButtonLink.setParent(_scene)
const transform14 = new Transform({
  position: new Vector3(30.5, 0.5, 15),
  rotation: new Quaternion(-1.5394153601527394e-15, -0.7071068286895752, 8.429369557916289e-8, 0.7071068286895752),
  scale: new Vector3(1.0000019073486328, 1, 1.0000019073486328)
})
instagramButtonLink.addComponentOrReplace(transform14)

const twitterButtonLink = new Entity('twitterButtonLink')
engine.addEntity(twitterButtonLink)
twitterButtonLink.setParent(_scene)
const transform15 = new Transform({
  position: new Vector3(30.5, 0.5, 13),
  rotation: new Quaternion(-1.5394153601527394e-15, -0.7071068286895752, 8.429369557916289e-8, 0.7071068286895752),
  scale: new Vector3(1.0000001192092896, 1, 1.0000001192092896)
})
twitterButtonLink.addComponentOrReplace(transform15)

const externalLink = new Entity('externalLink')
engine.addEntity(externalLink)
externalLink.setParent(_scene)
const transform16 = new Transform({
  position: new Vector3(30.5, 0.5, 11),
  rotation: new Quaternion(-1.5394153601527394e-15, -0.7071068286895752, 8.429369557916289e-8, 0.7071068286895752),
  scale: new Vector3(1.0000004768371582, 1, 1.0000004768371582)
})
externalLink.addComponentOrReplace(transform16)

const imageFromURL = new Entity('imageFromURL')
engine.addEntity(imageFromURL)
imageFromURL.setParent(_scene)
const transform17 = new Transform({
  position: new Vector3(31.5, 0.5, 11.5),
  rotation: new Quaternion(-2.4085271740892887e-15, -0.7071068286895752, 8.429369557916289e-8, 0.7071068286895752),
  scale: new Vector3(5.00000524520874, 2.25, 1.5000121593475342)
})
imageFromURL.addComponentOrReplace(transform17)

const imageFromURL2 = new Entity('imageFromURL2')
engine.addEntity(imageFromURL2)
imageFromURL2.setParent(_scene)
const transform18 = new Transform({
  position: new Vector3(29.5, 0.5, 8),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(2.25, 2.25, 1)
})
imageFromURL2.addComponentOrReplace(transform18)

const imageFromURL3 = new Entity('imageFromURL3')
engine.addEntity(imageFromURL3)
imageFromURL3.setParent(_scene)
const transform19 = new Transform({
  position: new Vector3(29, 0.5, 15.5),
  rotation: new Quaternion(-4.809224375614159e-15, -1, 1.1920926823449918e-7, -2.9802318834981634e-8),
  scale: new Vector3(2.2500014305114746, 2.25, 1.0000007152557373)
})
imageFromURL3.addComponentOrReplace(transform19)

const faceAccessCard = new Entity('faceAccessCard')
engine.addEntity(faceAccessCard)
faceAccessCard.setParent(_scene)
const transform20 = new Transform({
  position: new Vector3(16, 0, 16),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
faceAccessCard.addComponentOrReplace(transform20)

const channelId = Math.random().toString(16).slice(2)
const channelBus = new MessageBus()
const inventory = createInventory(UICanvas, UIContainerStack, UIImage)
const options = { inventory }

const script1 = new Script1()
const script2 = new Script2()
const script3 = new Script3()
const script4 = new Script4()
const script5 = new Script5()
script1.init(options)
script2.init(options)
script3.init(options)
script4.init(options)
script5.init(options)
script1.spawn(instagramButtonLink, {"url":"RedSoftware","bnw":false,"name":"RedSoftware"}, createChannel(channelId, instagramButtonLink, channelBus))
script2.spawn(twitterButtonLink, {"url":"Redsoftware","bnw":false,"name":"RedSoftware"}, createChannel(channelId, twitterButtonLink, channelBus))
script3.spawn(externalLink, {"url":"decentraland.org"}, createChannel(channelId, externalLink, channelBus))
script4.spawn(imageFromURL, {"image":"https://i.imgur.com/d25gO61.jpg"}, createChannel(channelId, imageFromURL, channelBus))
script4.spawn(imageFromURL2, {"image":"https://i.imgur.com/d25gO61.jpg"}, createChannel(channelId, imageFromURL2, channelBus))
script4.spawn(imageFromURL3, {"image":"https://i.imgur.com/d25gO61.jpg"}, createChannel(channelId, imageFromURL3, channelBus))
script5.spawn(faceAccessCard, {"target":"rectangularCanopy","respawns":true,"onUse":[{"entityName":"externalLink","actionId":"activate","values":{}}]}, createChannel(channelId, faceAccessCard, channelBus))