import {
  chakra,
  Button,
  Text,
  useToast,
  Link,
  Container,
  FormControl,
  FormLabel,
  Input,
  FormHelperText,
  Alert,
  AlertDescription, useClipboard
} from "@chakra-ui/react";
import { useCheckStatus } from "../hooks/useCheckStatus";
import { IDL } from "@dfinity/candid";
import { Principal } from "@dfinity/principal";
import { useState } from "react";
import { useGetToken } from "../hooks/useGetToken";
import { toBigNumber } from "../utils/format";
import { useGetAllowances } from "../hooks/useGetAllowances";

function Allowance(){
  const {mutationGetAllowances} = useGetAllowances()

  const [isLoading,setIsLoading] = useState(false)
  const [nftRegistry,setNFTRegistry] = useState<any>([])
  const toast = useToast();
  const [toCanisterId,setToCanisterId] = useState("");
  const getAllowance = async () => {
    if (toCanisterId === "") {
      toast({
        title: 'reg command',
        description: "Content cannot be empty",
        status: 'error',
        duration: 3000,
        position: 'top',
        isClosable: true,
      })
      return;
    }
    setIsLoading(true)
    const getTokenData = await mutationGetAllowances.mutateAsync(toCanisterId)
    setIsLoading(false)
    setNFTRegistry(getTokenData)
    console.log(getTokenData)
  }
  const [copyValue,setCopyValue] = useState("")
  const { hasCopied, onCopy } =  useClipboard(copyValue)

  return (
    <chakra.div mt={5}>
      <Container maxW={"4xl"}>
        <FormControl>
          <FormLabel>CanisterID</FormLabel>
          <Input type='Canisterid' onChange={(event)=>{setToCanisterId(event.target.value)}} />
          <FormHelperText>获取NFT的授权信息</FormHelperText>
        </FormControl>
        <FormControl  mt={3}>
          <Button disabled={isLoading} isLoading={isLoading} onClick={getAllowance} colorScheme={"blue"}>Get</Button>
        </FormControl>
        <chakra.div>
          Launchpad Canister Id: pczmq-maaaa-aaaah-abhwa-cai
          <br/>
          Platform Canister Id: udtw4-baaaa-aaaah-abc3q-cai

        </chakra.div>
        <Button mt={3} onClick={()=>{
          if (nftRegistry) {
            var str = "";
            for(let i = 0;i<nftRegistry.length;i++){
              str = str+nftRegistry[i][0]+","+nftRegistry[i][1] +"\r\n"
            }
            setCopyValue(str)
            onCopy()
          }
        }} ml={2}>
          {hasCopied ? 'Copied' : 'Copy'}
        </Button>

        <chakra.div mt={2} p={3} bg={"purple.100"}>
          {nftRegistry?nftRegistry.map((v:any,k:any)=>{
              return  <chakra.p>{v[0]},{v[1].toText()}</chakra.p>
          }):""}
          {/*<chakra.p>saddasdas</chakra.p>*/}
          {/*<chakra.p>saddasdas</chakra.p>*/}
        </chakra.div>
        {/*<chakra.div mt={3}>*/}
        {/*  <Alert status='success' borderRadius={"0.375rem"}>*/}
        {/*    <AlertDescription>当前可用Cycles {data ? toBigNumber(data).div(1e12).minus(2).toString()+"T":"loading"}</AlertDescription>*/}
        {/*  </Alert>*/}
        {/*</chakra.div>*/}
      </Container>
    </chakra.div>
  )
}

export default Allowance;